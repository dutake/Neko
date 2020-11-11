const {get} = require('powercord/http');
const {Plugin} = require('powercord/entities');
module.exports = class nekoCmd extends Plugin {
	startPlugin() {
		powercord.api.commands.registerCommand({
			command: 'neko',
			aliases: ['catgirl'],
			description: 'NSFW WARNING! DO IT IN A NSFW CHANNEL! >.<',
			usage: '{c}',
			executor: async () => {
				return await this.getRandomNekoUrl();
			}
		});
	}
	pluginWillUnload() {
		powercord.api.commands.unregisterCommand('neko');
	}
	async getRandomNekoUrl() {
		let x = await get('https://nekos.life/api/v2/img/neko') //.then(res => res.body);
		console.log(x.body);
		if (!x) {
			return {
				send: false,
				result: "there was an error getting a neko (´。＿。｀)"
			}
		}
		return {
			send: true,
			result: x.body.url
		};
	}
};