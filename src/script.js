import sketch from "sketch";

COScript.currentCOScript().setShouldKeepAround(true);

var pluginName = "Character Count";
var panelHeader = 44;
var panelHeight = 242;
var panelWidth = 343;
var panelGutter = 16 * 2;
var container = panelWidth - panelGutter;

function createFloatingPanel(title, frame) {
  var panel = NSPanel.alloc().init();
  panel.setTitle(title);
  panel.setFrame_display(frame, true);
  panel.setStyleMask(
    NSTexturedBackgroundWindowMask |
      NSTitledWindowMask |
      NSClosableWindowMask |
      NSFullSizeContentViewWindowMask
  );
  panel.setBackgroundColor(NSColor.windowBackgroundColor());
  panel.setLevel(NSFloatingWindowLevel);
  panel.makeKeyAndOrderFront(null);
  panel.center();
  return panel;
}

function createView(frame) {
  var view = NSView.alloc().initWithFrame(frame);
  view.setFlipped(1);
  return view;
}

function createBox(frame) {
  var box = NSBox.alloc().initWithFrame(frame);
  box.setTitle("");
  return box;
}

function createButton(label, frame) {
  var button = NSButton.alloc().initWithFrame(frame);
  button.setTitle(label);
  button.setBezelStyle(NSRoundedBezelStyle);
  button.setAction("callAction:");
  return button;
}

function createTextLabel(string, frame) {
  var field = NSTextField.alloc().initWithFrame(frame);

  field.setStringValue(string);
  field.setFont(NSFont.systemFontOfSize(12));
  field.setTextColor(
    NSColor.colorWithCalibratedRed_green_blue_alpha(0, 0, 0, 0.7)
  );
  field.setBezeled(0);
  field.setBackgroundColor(NSColor.windowBackgroundColor());
  field.setEditable(0);

  return field;
}

function createTextDataLabel(string, frame) {
  var field = NSTextField.alloc().initWithFrame(frame);

  field.setStringValue(string);
  field.setFont(NSFont.systemFontOfSize(13));
  field.setTextColor(
    NSColor.colorWithCalibratedRed_green_blue_alpha(0, 0, 0, 0.3)
  );
  field.setBezeled(0);
  field.setBackgroundColor(
    NSColor.colorWithCalibratedRed_green_blue_alpha(0, 0, 0, 0)
  );
  field.setEditable(0);

  return field;
}

function createTextValueLabel(string, frame) {
  var field = NSTextField.alloc().initWithFrame(frame);

  field.setStringValue(string);
  field.setFont(NSFont.systemFontOfSize(13));
  field.setBezeled(0);
  field.setBackgroundColor(
    NSColor.colorWithCalibratedRed_green_blue_alpha(0, 0, 0, 0)
  );
  field.setEditable(0);

  return field;
}

function createMainView(characters, words, paragraphs) {
  var panel = createFloatingPanel(
    pluginName,
    NSMakeRect(0, 0, panelWidth, panelHeight)
  );
  var panelContent = createView(
    NSMakeRect(0, 0, panelWidth, panelHeight - panelHeader)
  );

  var box = createBox(NSMakeRect(16, 4, container, 145));
  var labelTotalChar = createTextDataLabel(
    "Total Character",
    NSMakeRect(35, 35, 120, 15)
  );
  var valueTotalChar = createTextValueLabel(
    characters,
    NSMakeRect(35, 55, 120, 15)
  );
  var labelWords = createTextDataLabel("Words", NSMakeRect(35, 85, 120, 15));
  var valueWords = createTextValueLabel(words, NSMakeRect(35, 105, 120, 15));
  var labelParagraph = createTextDataLabel(
    "Paragraph",
    NSMakeRect(160, 85, 120, 15)
  );
  var valueParagraph = createTextValueLabel(
    paragraphs,
    NSMakeRect(160, 105, 120, 15)
  );

  var copyLabel = createTextLabel(
    "Easily copy values and sent to your writer",
    NSMakeRect(16, 163, 250, 20)
  );
  var copyButton = createButton("Copy", NSMakeRect(260, 162, 70, 23));

  [
    box,
    labelTotalChar,
    valueTotalChar,
    labelWords,
    valueWords,
    labelParagraph,
    valueParagraph,
    copyLabel,
    copyButton
  ].forEach(i => panelContent.addSubview(i));

  copyButton.setCOSJSTargetFunction(function() {
    var pasteBoard = NSPasteboard.generalPasteboard();
    var content =
      "It's " +
      characters +
      " characters, " +
      words +
      " words, and " +
      paragraphs +
      " paragraphs.";

    pasteBoard.clearContents();
    pasteBoard.writeObjects([content]);

    sketch.UI.message("✅ Copied!");
    panel.close();
  });

  panel.contentView().addSubview(panelContent);
}

export default function() {
  var text = context.selection.firstObject();
  var characters = 0;
  var words = 0;
  var paragraphs = 0;

  if (!text || text.class() != "MSTextLayer" || context.selection.length > 1) {
    sketch.UI.message("⚠️ Please select a text layer to count the character.");
    return;
  } else {
    var textAsLayer = text.stringValue();
    var layerToString = String(textAsLayer);

    characters = layerToString.length;
    words = layerToString.split(/\s+\b/).length;
    paragraphs = layerToString.replace(/\n$/gm, "").split(/\n/).length;
  }

  createMainView(characters, words, paragraphs);
}
