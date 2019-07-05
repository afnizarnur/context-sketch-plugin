import sketch from 'sketch'

var pluginName = "Character Count"
var panelHeader = 44;
var panelFooter = 38;
var panelHeight = 242;
var panelWidth = 343;
var panelGutter = 16*2;
var container = panelWidth - panelGutter;
var panelItems = [];

function getLayers(){
  const document = sketch.getSelectedDocument()
  const selectedLayers = document.selectedLayers
  return selectedLayers
}

function createFloatingPanel(title,frame) {
	var panel = NSPanel.alloc().init();
	panel.setTitle(title);
	panel.setFrame_display(frame,true);
	panel.setStyleMask(NSTexturedBackgroundWindowMask | NSTitledWindowMask | NSClosableWindowMask | NSFullSizeContentViewWindowMask);
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

function createButton(label,frame) {
	var button = NSButton.alloc().initWithFrame(frame);

	button.setTitle(label);
	button.setBezelStyle(NSRoundedBezelStyle);
	button.setAction('callAction:');

	return button;
}

function createTextLabel(string,frame) {
	var field = NSTextField.alloc().initWithFrame(frame);

	field.setStringValue(string);
	field.setFont(NSFont.systemFontOfSize(9));
	field.setTextColor(NSColor.colorWithCalibratedRed_green_blue_alpha(0,0,0,0.4));
	field.setBezeled(0);
	field.setEditable(0);

	return field;
}

export default function() {
  const selectedLayers = getLayers()
  if (selectedLayers.length === 0) {
    sketch.UI.message("⚠️ Please select a text layer to count the character.")
  } else {
	
	var panel = createFloatingPanel(pluginName,NSMakeRect(0,0,panelWidth,panelHeight));
	var panelContent = createView(NSMakeRect(0,0,panelWidth,panelHeight - panelHeader));
	
	var box = createBox(NSMakeRect(16,4,container,148));
	// var copy = createButton('Copy',NSMakeRect(0,0,70,20));
	
	[box].forEach(i => panelContent.addSubview(i));

	panel.contentView().addSubview(panelContent);

    // NSApplication.sharedApplication().displayDialog_withTitle("hello", "Count")
    sketch.UI.message('👋 Welcome to Character Count Plugin')
  }
}