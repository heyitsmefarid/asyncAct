/* PART 1 */
function runTimeoutExample() {
  console.log("First message");

  setTimeout(() => {
    console.log("Second message (after 2 seconds)");
  }, 2000);

  console.log("Third message");
}

document.getElementById("timeoutBtn").addEventListener("click", runTimeoutExample);

/* PART 2 */
function getQuoteWithPromises() {
  fetch("https://favqs.com/api/qotd")
    .then(response => response.json())
    .then(data => {
      document.getElementById("promiseOutput").src = data.quote.body; 
    })
    .catch(error => {
      console.error("Error fetching dog:", error);
      document.getElementById("promiseOutput").alt = "Error fetching dog image.";
    });
}

document.getElementById("promiseBtn").addEventListener("click", getQuoteWithPromises);

/* PART 3 */

async function getQuoteWithAsync() {
  try {
    let response = await fetch("https://www.boredapi.com/api/activity");
    let data = await response.json();
    document.getElementById("asyncOutput").innerText = data.content; 
  } catch (error) {
    console.error("Error fetching quote:", error);
    document.getElementById("asyncOutput").innerText = "Error fetching quote.";
  }
}

document.getElementById("asyncBtn").addEventListener("click", getQuoteWithAsync);