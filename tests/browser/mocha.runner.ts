'use strict'

mocha.setup({
    ui: 'bdd',
    timeout: 20000
})

import '../abi.test'
import '../bloom.test'
import '../cert.test'
import '../crypto.test'
import '../rlp.test'
import '../transaction.test'

mocha.checkLeaks()
mocha.run()
