# SOP-Altera-API

# SOPHIA and Alltera Integration Service

This codebase implements the integration flow between SOPHIA and Alltera systems for managing Standard Operating Procedures (SOPs) and procedure execution data. It ensures that SOPs are created in SOPHIA, pushed to Alltera, retrieved directly from SOPHIA during procedure execution in Alltera, and procedure execution data is sent back to SOPHIA for compliance tracking.

## Integration Flow

1. **SOP Creation in SOPHIA**:
   - SOPs are created in SOPHIA.
   - SOPHIA uses its API to push the newly created SOPs to Alltera.

2. **Procedure Execution in Alltera**:
   - When a user initiates a procedure in Alltera, the system pulls the relevant SOP directly from SOPHIA.

3. **Data Logging and Compliance**:
   - Alltera logs the procedure execution data.
   - The logged data is then sent back to SOPHIA for compliance tracking and reporting.

## Code Structure

- **server.js**: Main server file defining endpoints.
- **allteraApi.js**: Module for interacting with the Alltera API.
- **sophiaApi.js**: Module for interacting with the SOPHIA API.

## Endpoints

1. **Create SOP in SOPHIA and Push to Alltera**:
   - **URL**: `/sops`
   - **Method**: POST
   - **Description**: Creates an SOP in SOPHIA and pushes it to Alltera.

2. **Fetch SOP from SOPHIA** (Used by Alltera during procedure execution):
   - **URL**: `/sophia-sops/:id`
   - **Method**: GET
   - **Description**: Retrieves an SOP directly from SOPHIA based on the SOP ID. This is used by Alltera when initiating a procedure.

3. **Log Procedure Execution Data**:
   - **URL**: `/procedures`
   - **Method**: POST
   - **Description**: Logs procedure execution data in both Alltera and SOPHIA. Alltera sends the procedure data to this endpoint, which then logs it in both systems for compliance tracking.

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
    ALLTERA_API_URL=<Alltera API base URL>
    SOPHIA_API_URL=<SOPHIA API base URL>
    node start