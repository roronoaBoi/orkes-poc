import { orkesConductorClient, TaskManager } from "@io-orkes/conductor-javascript";
import dotenv from 'dotenv'
dotenv.config()

const token = process.env.TOKEN

//functions to process data
function switchId(input) {
  return input === "1" ? "Type 1" : "Type 2";
}

function passStatus(score) {
  return score <= 69;
}

function createPayload(input, score, type) {
  return {
    id: input.id,
    subType: input.subType,
    type_label: type,
    score: input.score,
    failed: score,
  };
}

//main worker
async function procData() {
  try {
    const client = await orkesConductorClient({
      TOKEN: token,
      serverUrl: "https://developer.orkescloud.com/api",
    });

    const customWorker = {
      taskDefName: "proc_data",
      execute: async ({ inputData: { id, subType, score }, taskId }) => {
        try {
          const failedStat = passStatus(score);
          const typeLabel = switchId(subType);
          const detail = createPayload({ id, subType, score }, failedStat, typeLabel);
          console.log('payload created!')
          console.log(detail)

          return {
            outputData: { detail },
            status: "COMPLETED",
          };
        } catch (err) {
          console.error(`Error processing task ${taskId}:`, err);
          return { status: "FAILED" };
        }
      },
    };

    const manager = new TaskManager(client, [customWorker], {
      options: { pollInterval: 100, concurrency: 1 },
    });

    manager.startPolling();
    console.log("Worker is polling...");
  } catch (err) {
    console.error("Failed to initialize Conductor client or task manager:", err);
  }
}

procData();
