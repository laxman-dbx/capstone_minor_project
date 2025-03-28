const detectPii = require("./detectPii");

exports.replaceChars = async (req, res) => {
  const text = req.body.text;
  if (!text) {
    return res
      .status(200)
      .send({ success: false, error: "Text parameter is required" });
  }

  try {
    const response = await detectPii(text);

    const entityEntries = Object.entries(response);
    entityEntries.sort((a, b) => a[1].start_index - b[1].start_index);

    let modifiedText = text;
    const newIndicesArray = [];

    for (const [entityName, entityData] of entityEntries) {
      const { start_index, end_index } = entityData;
      const plain_text = entityName;
      const cipher_text = "*".repeat(plain_text.length - 1);

      newIndicesArray.push([start_index, start_index + cipher_text.length]);

      modifiedText =
        modifiedText.slice(0, start_index + 1) +
        cipher_text +
        modifiedText.slice(end_index);
    }

    res.status(200).send({
      success: true,
      encryptedText: modifiedText,
      newIndex: newIndicesArray,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      success: false,
      error: "An error occurred while processing your request",
    });
  }
};
