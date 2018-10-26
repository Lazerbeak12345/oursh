use std::env;

#[derive(Clone, Debug)]
pub struct Config {
    // syntax: ...,
    debug: DebugConfig,
    history_file: String,
}

impl Default for Config {
    fn default() -> Self {
        let home = env::var("HOME").expect("HOME not set");
        Config {
            debug: DebugConfig::default(),
            history_file: format!("{}/.oursh_history", home),
        }
    }
}

#[derive(Default, Clone, Debug)]
struct DebugConfig {
    ast: bool,
    lexer: bool,
    #[cfg(feature = "raw")]
    raw: bool,
    #[cfg(feature = "history")]
    history: bool,
    #[cfg(feature = "completion")]
    completion: bool,
}
