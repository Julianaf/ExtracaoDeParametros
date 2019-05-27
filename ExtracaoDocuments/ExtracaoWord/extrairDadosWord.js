const imports = require('../imports')

exports.ExtrairDadosDocumentoWord = (RecebeJson) => {
    const arquivoTempJson = `../ProjetoAcessibilidade/ionic - Copia.docx/word/tempStyle.json`
    imports.baseDocument.ReadFileWithXml(`../ProjetoAcessibilidade/ionic - Copia.docx/word/styles.xml`, (err) => {
        imports.parser.parseString(err, (err, result) => {
            parsedData = JSON.stringify(result)

            imports.jsonfile.writeFile(arquivoTempJson, parsedData, function (err) {
                imports.jsonfile.readFile(arquivoTempJson, function (err, obj) {
                    const jsonData = JSON.parse(obj)
                    let TotalStyle = imports.pointer.get(jsonData, `/w:styles/w:style`).length
                    for (let i = 0; i < TotalStyle; i++) {
                        if ((imports.pointer.has(jsonData, `/w:styles/w:style/${i}/$/w:styleId`)) &&
                            (imports.pointer.has(jsonData, `/w:styles/w:style/${i}/w:rPr/0/w:rFonts/0/$/w:hAnsi`))) {

                            // console.log(
                            //     imports.pointer.get(jsonData, `/w:styles/w:style/${i}/$/w:styleId`), 
                            //     imports.pointer.get(jsonData, `/w:styles/w:style/${i}/w:rPr/0/w:rFonts/0/$/w:hAnsi`))

                            imports.classStyle.inserirStyle(
                                imports.pointer.get(jsonData, `/w:styles/w:style/${i}/$/w:styleId`),
                                imports.pointer.get(jsonData, `/w:styles/w:style/${i}/w:rPr/0/w:rFonts/0/$/w:hAnsi`)
                            )
                        }
                    }
                })
            })
        })
    })
    //console.log(imports.classStyle.style)
    

    // if (imports.pointer.has(RecebeJson, '/w:document/w:background/0/$/w:color')) {
    //     imports.classDocument.inserirDadosDocumento(
    //         'Caminho Tal',
    //         'docx',
    //         imports.pointer.get(RecebeJson, '/w:document/w:background/0/$/w:color'),
    //         imports.pointer.get(RecebeJson, '/w:document/w:background/0/$/w:themeColor'),
    //         imports.pointer.get(RecebeJson, '/w:document/w:background/0/$/w:themeShade')
    //     )
    // }

    let TotalLinhasWP = imports.pointer.get(RecebeJson, '/w:document/w:body/0/w:p').length
    for (let i = 0; i < TotalLinhasWP; i++) {
        try {
            let TotalLinhasWR = imports.pointer.get(RecebeJson, `/w:document/w:body/0/w:p/${i}/w:r`).length
            if (TotalLinhasWR > 0) {
                for (let j = 0; j < TotalLinhasWR; j++) {
                    //console.log(`${i} - ${j}`)
                    //console.log(imports.pointer.get(RecebeJson, '/w:document/w:body/0/w:p/' + i + '/w:r/' + j))

                    imports.extrairVideosWord.ExtrairVideos(RecebeJson, i, j)

                     imports.extrairImagensWord.ExtrairImagens(RecebeJson, i, j)

                    imports.extrairGraficosWord.ExtrairGraficos(RecebeJson, i, j)

                    imports.extrairAudiosWord.ExtrairAudios(RecebeJson, i, j)

                    imports.extrairTextosWord.ExtrairTextos(RecebeJson, i, j)
                }
            }
        } catch (e) { }
    }
     imports.extrairTabelasWord.ExtrairTabelas(RecebeJson)
}