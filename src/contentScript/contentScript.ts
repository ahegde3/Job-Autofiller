import { Server } from "../utils/crossContextCommunication/server";
import { FieldPath, Answer } from "../utils/types";
import { EVENT_LISTENER_ID, loadApp } from "./app/App";
import { answers1010, migrate1010 } from "../utils/storage/Answers1010";
import { UserData } from "../utils/storage/UserData";
import { convert106To1010, convert1010To106 } from "../utils/storage/DataStore";
import { SavedAnswer } from "../utils/storage/DataStoreTypes";
import { migrateEducation } from "../utils/storage/migrateEducationSectionNames";

// Regiser server and methods accessible to injected script.
const server = new Server(process.env.CONTENT_SCRIPT_URL);
const userData = new UserData();
server.register("addAnswer", async (newAnswer: Answer) => {
  const answer1010 = answers1010.add(convert106To1010(newAnswer));
  return convert1010To106(answer1010);
});

server.register("updateAnswer", async (newAnswer: Answer) => {
  const answer1010 = answers1010.update(
    convert106To1010(newAnswer) as SavedAnswer
  );
  return convert1010To106(answer1010);
});

server.register("getAnswer", async (fieldPath: FieldPath) => {
  console.log("getAnswer", fieldPath);
  const answer = userData.getFieldValue(fieldPath.fieldName);

  const data = answers1010
    .search(fieldPath)
    .map((record) => convert1010To106(record));
  console.log("getAnswer2", data);
  return [{ answer, id: 0, matchType: "exact", path: fieldPath }];
});

server.register("deleteAnswer", async (id: number) => {
  return answers1010.delete(id);
});

// inject script
function injectScript(filePath: string) {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL(filePath);
  script.setAttribute("async", "true");
  script.type = "module";
  script.onload = function () {
    script.remove();
  };
  (document.head || document.documentElement).appendChild(script);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SHOW_WHATS_NEW") {
    document.dispatchEvent(new CustomEvent(EVENT_LISTENER_ID));
  }
});

const run = async () => {
  await answers1010.load();
  await migrate1010();
  await migrateEducation();
  injectScript("inject.js");
  loadApp();
};

run();
