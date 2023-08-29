const themes = {
    light: {
        background: "white"
    },
    dark: {
        background: "grey"
    }
}

function changeCSSTheme(themeName){
    for (const variable in themes[themeName]){
        document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
    }
}


function toggleLightDark(){
	let currentBackgroundColour = getComputedStyle(document.documentElement).getPropertyValue("--background");
	if (currentBackgroundColour == "white") {
		changeCSSTheme("dark");
	}  else {
		changeCSSTheme("light");
	}
}
// changeCSSTheme("light")