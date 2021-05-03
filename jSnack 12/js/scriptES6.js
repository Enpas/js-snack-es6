let windowBrowser = {
  tabs: ['Facebook', 'GitHub', 'Libero Mail', 'Gmail', 'Telegram'],
  activeTab: 0
}

const socials = ['Facebook', 'WhatsApp', 'Telegram', 'Instagram', 'Twitter'];

let {tabs, activeTab} = windowBrowser;

let tabFilt = tabs.filter((tab) => {
  if (!socials.includes(tab)) {
    return true;
  } else {
    return false;
  }
})

windowBrowser.tabs = tabFilt;

if (activeTab > (tabFilt.length - 1)) {
  windowBrowser.activeTab = activeTab - 1;
}

console.log(windowBrowser)
