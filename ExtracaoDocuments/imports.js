exports.fs = require('fs')
exports.fse = require('fs-extra')
exports.unzip = require('unzip')
exports.rimraf = require('rimraf')
exports.cheerio = require('cheerio')

exports.path = require('path')

const xml2js = require('xml2js')
exports.parser = new xml2js.Parser()

exports.jsonfile = require('jsonfile')

exports.pointer = require('json-pointer')

exports.baseDocument = require('./baseDocument')

exports.classDocument = require('./Classes/classDocument')
exports.tratativaClass = require('./Classes/tratativasClassDocument')
exports.classErros = require('./Classes/classErros')
exports.classStyle = require('./Classes/classStyle')

exports.extrairDadosWord = require('./ExtracaoWord/extrairDadosWord')
exports.extrairCabecalho = require('./ExtracaoWord/extrairCabecalho')
exports.extrairTabelasWord = require('./ExtracaoWord/extrairTabelas')
exports.extrairImagensWord = require('./ExtracaoWord/extrairImagens')
exports.extrairVideosWord = require('./ExtracaoWord/extrairVideos')
exports.extrairGraficosWord = require('./ExtracaoWord/extrairGraficos')
exports.extrairAudiosWord = require('./ExtracaoWord/extrairAudios')
exports.extrairTextosWord = require('./ExtracaoWord/extrairTextos')
exports.baseWord = require('./ExtracaoWord/baseWord')


exports.extrairDadosEpub = require('./ExtracaoEpub/extrairDadosEpub')
exports.extrairCabecalho = require('./ExtracaoEpub/extrairCabecalho')
exports.extrairTabelasEpub = require('./ExtracaoEpub/extrairTabelas')
exports.extrairImagensEpub = require('./ExtracaoEpub/extrairImagens')
exports.extrairVideosEpub = require('./ExtracaoEpub/extrairVideos')
exports.extrairGraficosEpub = require('./ExtracaoEpub/extrairGraficos')
exports.extrairAudiosEpub = require('./ExtracaoEpub/extrairAudios')
exports.extrairTextosEpub = require('./ExtracaoEpub/extrairTextos')
exports.baseEpub = require('./ExtracaoEpub/baseEpub')