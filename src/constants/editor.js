export const editorConfig = {
  placeholderText: "Enter Your Content Here!",
  heightMin: 400,
  toolbarButtons: {
    moreText: {
      buttons: [
        "bold",
        "italic",
        "underline",
        "strikeThrough",
        "subscript",
        "superscript",
        "fontFamily",
        "fontSize",
        "textColor",
        "backgroundColor",
      ],
      buttonsVisible: 0,
    },
    moreParagraph: {
      buttons: [
        "alignLeft",
        "alignCenter",
        "formatOLSimple",
        "alignRight",
        "alignJustify",
        "formatOL",
        "formatUL",
        "paragraphFormat",
        "lineHeight",
        "outdent",
        "indent",
      ],
      buttonsVisible: 0,
    },
    moreRich: {
      buttons: [
        "insertLink",
        "insertImage",
        "insertTable",
        "insertFile",
        "insertHR",
      ],
      buttonsVisible: 0,
    },
    moreMisc: {
      buttons: ["undo", "redo", "fullscreen", "help"],
      align: "right",
      buttonsVisible: 2,
    },
  },
};
