# SOP-Altera-API

# SOPHIA and Altera Integration Service

This codebase implements the integration flow between SOPHIA and Altera systems for managing Standard Operating Procedures (SOPs) and procedure execution data. It ensures that SOPs are created in SOPHIA, pushed to Altera, retrieved directly from SOPHIA during procedure execution in Altera, and procedure execution data is sent back to SOPHIA for compliance tracking.

## Integration Flow

1. **SOP Creation in SOPHIA**:
   - SOPs are created in SOPHIA.
   - SOPHIA uses its API to push the newly created SOPs to Altera.

2. **Procedure Execution in Altera**:
   - When a user initiates a procedure in Altera, the system pulls the relevant SOP directly from SOPHIA.

3. **Data Logging and Compliance**:
   - Altera logs the procedure execution data.
   - The logged data is then sent back to SOPHIA for compliance tracking and reporting.

## Code Structure

- **app.js**: Main server file defining endpoints.
- **sophiaApi.js**: Module for interacting with the SOPHIA API.
- **routes/sopRoutes.js**: Defines routes and maps them to controller functions.
- **controllers/sopControllers.js**: Implements business logic for SOP operations.

## Endpoints

1. **Create SOP in SOPHIA and Push to Altera**:
   - **URL**: `/sophia/sops`
   - **Method**: POST
   - **Description**: Creates an SOP in SOPHIA and pushes it to Altera.

2. **Fetch SOP from SOPHIA** (Used by Altera during procedure execution):
   - **URL**: `/sophia/sops/:id`
   - **Method**: GET
   - **Description**: Retrieves an SOP directly from SOPHIA based on the SOP ID. This is used by Altera when initiating a procedure.

3. **Log Procedure Execution Data**:
   - **URL**: `/sophia/procedures`
   - **Method**: POST
   - **Description**: Logs procedure execution data in both Altera and SOPHIA. Alltera sends the procedure data to this endpoint, which then logs it in both systems for compliance tracking.

## How to Use

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Setup

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-directory>
    npm install
    PORT=3000
    ALTERA_API_URL=<Altera API base URL>
    SOPHIA_API_URL=<SOPHIA API base URL>
    node start