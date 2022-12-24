const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'3f6bf082-e5ab-40f5-8ccd-38aba2773ae1'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
