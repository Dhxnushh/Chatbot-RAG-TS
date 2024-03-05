# Magenta: AI Web Scraper with LangChain

Magenta is an AI-powered web scraper that utilizes the LangChain library to efficiently extract and process data from websites. It provides a user-friendly interface and leverages advanced techniques such as natural language processing (NLP) and machine learning (ML) to enhance the scraping process.

**Features:**

* **Intelligent Data Extraction:** Employs NLP to understand website structure and content, enabling targeted data extraction.
* **Flexible Data Processing:** Utilizes LangChain for efficient data cleaning, manipulation, and analysis.
* **Automation Capabilities:** Supports automation of scraping tasks, simplifying repetitive data collection workflows.
* **Customization Options:** Offers configuration options to tailor the scraper to specific website structures and data needs.

**Target Audience:**

This project is geared towards data scientists, web developers, and anyone who needs to extract structured data from websites in a scalable and intelligent manner.

**Languages:**

* Typescript/Javascript (primary)

**Prerequisites:**

* Typescript
* LangChain library(js)
* Check package.json for the rest of the dependencies.

**Initializing:**

* Create a new .env file.
* Load your google api key from google ai studio and name it 'GOOGLE_API_KEY'="your api key".
* Import config from dotenv where you are initializing the model.
* Call the config() function.

**Customizability:**

* Go to webloader.ts file in the src folder.
* Change the website URL to What ever website you want to scrape and get data from.
