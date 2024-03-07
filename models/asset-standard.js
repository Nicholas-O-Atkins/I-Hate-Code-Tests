const mongoose = require('mongoose')
const marked = require('marked', {
    mangle: false,
    headerIds: false
})
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)

const auditShema = new mongoose.Schema({
    asset_id:{
        type: BigInt,
        required: true
    },
    standard_id:{
        type: BigInt,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})