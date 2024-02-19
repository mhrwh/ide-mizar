const path = require('path')
const { AutoLanguageClient } = require('atom-languageclient')

class MizarLanguageClient extends AutoLanguageClient {
  getGrammarScopes() { return ['source.miz'] }
  getLanguageName() { return 'Mizar' }
  getServerName() { return 'Mizar' }

  startServerProcess() {
    const serverPath = 'node_modules/typescript/lib/tsserver.js'
    return super.spawnChildNode([
      'node_modules/mizar-language-server/out/server',
      '--stdio',
      '--tsserver-path', serverPath
    ], { cwd: path.join(__dirname, '..') })
  }
}

module.exports = new MizarLanguageClient()
