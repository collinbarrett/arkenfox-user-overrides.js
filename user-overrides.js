/*** MY OVERRIDES ***/
/*** 1. Copy to Firefox profile directory */
/*** 2. Run https://github.com/arkenfox/user.js/wiki/5.1-Updater-%5BOptions%5D in Firefox profile directory */
/*** 3. Run https://github.com/arkenfox/user.js/wiki/3.5-prefsCleaner in Firefox profile directory */
user_pref("_user.js.parrot", "overrides section syntax error");
//user_pref("security.cert_pinning.enforcement_level", 1); // 1223 loosen security key pinning for work antivirus
//user_pref("webgl.disabled", false); // 2010 enable webGL for Mapbox embeds (e.g. NYT)
user_pref("privacy.resistFingerprinting.letterboxing", false); // 4504 disable letterboxing
user_pref("extensions.pocket.enabled", false); // 5000 disable Pocket extension (not ref'd in arkenfox user.js)
user_pref("keyword.enabled", true); // 0801 enable searching from location bar

// set custom NextDNS URL, then uncomment next three lines
// user_pref("network.trr.mode", 3);
// user_pref("network.trr.custom_uri", "https://dns.nextdns.io/{REDACTED}");
// user_pref("network.trr.uri", "https://dns.nextdns.io/{REDACTED}");

user_pref("signon.rememberSignons", false); // 0901 disable password manager (not ref'd in arkenfox user.js)
user_pref("_user.js.parrot", "SUCCESS");
