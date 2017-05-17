import { expect } from 'chai'

require("babel-core/register")({
    // Ignore everything in node_modules except node_modules/rcomponents.
    ignore: /node_modules\/(?!lodash-es)/
})

export { expect }
