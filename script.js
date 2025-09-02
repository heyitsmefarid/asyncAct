/* PART 1 */
function runTimeoutExample() {
  console.log("First message");

  setTimeout(() => {
    console.log("Second message (after 2 seconds)");
  }, 2000);

  console.log("Third message");
}

document.getElementById("timeoutBtn").addEventListener("click", runTimeoutExample);

function getQuoteWithPromises() {
  fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random"))
    .then(response => response.json())
    .then(data => {
      let parsed = JSON.parse(data.contents);
      let quote = parsed[0];
      document.getElementById("promiseOutput").innerText =
        `"${quote.q}" — ${quote.a}`;
    })
    .catch(error => {
      console.error("Error fetching quote:", error);
      document.getElementById("promiseOutput").innerText = "Error fetching quote.";
    });
}

document.getElementById("promiseBtn").addEventListener("click", getQuoteWithPromises);

document.getElementById("promiseBtn").addEventListener("click", getQuoteWithPromises);

/* PART 3 */
async function getQuoteWithAsync() {
  try {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
    document.getElementById("asyncOutput").innerText = `Joke: ${data.value}`;
  } catch (error) {
    console.error("Error fetching joke:", error);
    document.getElementById("asyncOutput").innerText = "Error fetching joke.";
  }
}

document.getElementById("asyncBtn").addEventListener("click", getQuoteWithAsync);
