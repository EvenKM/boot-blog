import fs from "fs";
import os from "os";
import path from "path";

type Config = {
	dbUrl: string,
	currentUserName: string
}

export function setUser(user: string): void {
	const filePath = path.join(os.homedir(), ".gatorconfig.json");
	let data = fs.readFileSync(filePath, {encoding: "utf-8"});
	let cfObj: Config = JSON.parse(data);

	cfObj.currentUserName = user;
	fs.writeFileSync(filePath, JSON.stringify(cfObj));
}

