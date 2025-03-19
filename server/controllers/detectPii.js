const { PythonShell } = require("python-shell");

async function detectPii(text) {
  if (!text) {
    return JSON.parse("Text parameter is required");
  }

  const options = {
    pythonPath: "/usr/bin/python3",
    args: [text],
    pythonOptions: ["-u"],
    scriptPath: "./utils",
  };

  try {
    const result = await PythonShell.run("model.py", options);
    if (result[0] === "No entities detected.") {
      return { success: false, error: "Text contains no PII data" };
    } else {
      const cleanedString = result[0]
        .replace(/'/g, '"')
        .replace(/\s([a-zA-Z0-9_]+):/g, '"$1":');
      return JSON.parse(cleanedString);
    }
  } catch (error) {
    console.error("Error executing Python script:", error);
    return { error: "Error executing Python script", details: error.message };
  }
}

module.exports = detectPii;
