# Real-Time-Event-Ticketing-System

This system handles real-time ticket vending and purchasing using Java (CLI), React (frontend), and Node.js (backend). The Java CLI manages multi-threaded ticket operations, while the backend connects to a MySQL database via RESTful APIs for real-time transactions and updates.

## Overview

This project implements a **Real-Time Event Ticketing System** designed to handle concurrent ticket release and purchase operations using a multi-threaded **Producer-Consumer** pattern. The system is composed of three main components:

1. **Java CLI**: Manages the ticketing operations, including ticket vending (producers) and bulk/automated ticket purchases (consumers). It interacts with the backend via REST APIs.
2. **React Frontend**: Provides the user interface for customers to interact with the system, allowing them to view available tickets and make purchases.
3. **Node.js Backend**: Acts as the middleware between the React frontend and the database, handling all ticketing logic, ensuring concurrency control, and interacting with the database for ticket storage and retrieval.

## System Architecture

### Java CLI
- **Multi-threaded Ticket Vending and Purchasing**: Implements the Producer-Consumer pattern using multi-threading. Vendors (producers) add tickets to the system, while customers (consumers) attempt to buy tickets concurrently.
- **REST API Integration**: The Java CLI communicates with the Node.js backend to add tickets and process purchases by making HTTP requests to the backend's API.

### React Frontend
- **User Interface**: Provides an intuitive UI for users to view and purchase tickets. It communicates with the backend using REST APIs to fetch ticket data and process user transactions.
- **Real-Time Updates**: The frontend receives real-time updates about ticket availability, ensuring customers are aware of the current status of ticket sales.

### Node.js Backend
- **Ticket Management**: Handles ticket addition, availability checks, and purchases. It communicates with both the React frontend and Java CLI.
- **Database Integration**: Interacts with a database (e.g., MySQL) to store and retrieve ticket data. The backend ensures that operations are synchronized and prevent race conditions during concurrent transactions.

## Features
- **Concurrent Ticket Management**: Supports multiple vendors adding tickets and multiple customers purchasing tickets simultaneously.
- **Real-Time Data Handling**: Provides real-time ticket availability to the React frontend and Java CLI.
- **API-Based Architecture**: Enables both the frontend and CLI to interact with the backend through RESTful APIs.

## Getting Started
To get started with the project, clone the repository and follow the setup instructions in each component's respective folder:

- **Java CLI**: See `cli/README.md` for instructions on running the CLI for ticket vending and purchasing.
- **React Frontend**: See `frontend/README.md` for instructions on setting up and running the frontend.
- **Node.js Backend**: See `backend/README.md` for instructions on setting up the backend and connecting to the database.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more information.
