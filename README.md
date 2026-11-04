# Asynchronous Country & Neighbor Finder

An interactive web application that retrieves and displays comprehensive geographical data for searched countries along with all of their immediate land-bordering neighbors in parallel. The project highlights advanced asynchronous JavaScript behavior including modern `async/await` syntax, error management patterns, and concurrent promise resolution.

---

## 🚀 Live Demo

Interact with the live application directly in your browser:
*   **Link:** [https://countries-info-seven.vercel.app/]

---

## 🛠️ Tech Stack

* **Structure:** HTML5 (Semantic containers matching dynamic data insert slots)
* **Styling:** CSS3 (Featuring a custom pill-shaped search layout, flexbox wrapping distributions, hover translation animations, and fluid fade transitions)
* **Logic Engine:** Asynchronous Vanilla JavaScript (ES6+)
* **Data Source:** [REST Countries v2 API](https://restcountries.com/v2/)

---

## ✨ Key Features

* **Dynamic Country Search:** Users can submit query strings via an animated search interface to instantly look up any global country target.
* **Parallel Neighbor Fetching:** Uses `Promise.all()` to concurrently handle network fetch streams for all neighboring country codes via alpha code lookups, cutting down on sequential load delays.
* **Live Data Rendering:** Generates detailed profile metric elements displaying national flags, official regions, total population metrics scaled into millions, primary spoken languages, and active trading currencies.
* **Visual Architecture Hierarchy:** Neighboring territories are styled with a scaled down, modified layout complete with a CSS pseudo-element tag explicitly indicating their "Neighbour country" status.
* **Robust Network Error Isolation:** Captures status code failures (e.g., 404 responses for non-existent countries) natively inside custom error throw conditions, rendering localized warnings safely to the screen without breaking application flow.
* **Clean Async State Resetting:** Automatically wipes previous ledger results, hides the display container via an opacity drop, executes asynchronous actions, and fades the container back into view once network payloads resolve successfully.

---

## 📂 File Structure

```text
├── index.html       # Structural layout markup hosting the input forms and append nodes
├── style.css        # Layout parameters, structural cards, grid spacing, and animation wrappers
└── script.js        # Asynchronous API pipelines, network error interceptors, and UI handlers
