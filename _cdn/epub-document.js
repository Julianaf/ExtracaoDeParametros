let baseDocument = require('./base-document')
const path = require('path')

exports.ExtrairDadosEpubCerto = (FileNameEpub, callback) => {
    let NameEpub = path.basename(FileNameEpub);
    let FilNameZipEpub = `${NameEpub.zip}`;

    baseDocument.CopiarArquivoNaPasta(FileNameEpub, (err) => {
        if (err == 'Copiou') {
            baseDocument.RenameArchiveForZip(NameEpub, FilNameZipEpub, (err) => {
                if (err == 'Zipou') {
                    baseDocument.ExtractionFileZip(FilNameZipEpub, NameEpub, (err) => {
                        if (err == 'Extraiu') {
                            baseDocument.ReadDirectory(NameEpub + '/OEBPS', (err) => {
                                if (err.indexOf('Error') > 0) {
                                    return callback('Erroooouuuu')
                                } else {
                                    let Css
                                    let Doc
                                    let Doc2
                                    baseDocument.ReadFileWithUtf8(__dirname + '/tmp/' + NameEpub + '/OEBPS/Styles/TurismoParaCegos.css', err => {
                                        // DadosEpub = { Arquivo1: err }
                                        Css = err
                                        baseDocument.ReadFileWithUtf8(__dirname + '/tmp/' + NameEpub + '/OEBPS/Text/TurismoParaCegos-10.xhtml', err => {
                                            // DadosEpub = { Arquivo1: err }
                                            Doc = err
                                            baseDocument.ReadFileWithUtf8(__dirname + '/tmp/' + NameEpub + '/OEBPS/Text/TurismoParaCegos-11.xhtml', err => {
                                                // DadosEpub += { Arquivo2: err }
                                                Doc2 = err
                                                baseDocument.ExcluirDiretorioComArquivos(__dirname + '/tmp/', err => {
                                                    console.log(err)
                                                })
                                                return callback({ CSS: Css, Arq1: Doc, Arq2: Doc2 })
                                            })
                                        })
                                    })
                                }
                            })
                        } else {
                            return callback('Erro: Ocorreu um erro inesperado para extrair as informações do arquivo')
                        }
                    })
                } else {
                    return callback(`Erro: ${err}`)
                }
            })
        } else {
            return callback('Erro: ' + err)
        }
    })
}