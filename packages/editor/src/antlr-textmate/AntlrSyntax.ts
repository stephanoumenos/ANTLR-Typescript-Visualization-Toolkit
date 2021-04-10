// from https://github.com/mike-lischke/vscode-antlr4/blob/master/syntaxes/antlr.json
export const AntlrSyntax = String.raw`{
  "name": "ANTLR4",
  "scopeName": "source.antlr",
  "uuid": "ACABDECD-4F22-47D9-A5F4-DBA957A2A1CC",
  "fileTypes": [
    "g",
    "g4" ],

  "patterns": [{
      "include": "#strings"
    },
    {
      "include": "#comments"
    },
    {
      "include": "#options-list"
    },

    {
      "name": "keyword.other.antlr",
      "match": "\\b(import|lexer|parser|grammar|throws|catch|finally|mode)\\b"
    },

    {
      "name": "meta.tokens.antlr",
      "begin": "\\btokens\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.other.tokens.antlr"
        }
      },
      "end": "(?<=\\})",
      "patterns": [{
          "include": "#lexer-rule-reference"
        },
        {
          "include": "#comments"
        }
      ]
    },

    {
      "name": "meta.channels.antlr",
      "begin": "\\bchannels\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.other.channels.antlr"
        }
      },
      "end": "(?<=\\})",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.options.end.antlr"
        }
      },
      "patterns": [{
          "include": "#comments"
        },
        {
          "name": "constant.language.channel.antlr",
          "match": "\\w+"
        }
      ]
    },

    {
      "name": "meta.action.named.antlr",
      "begin": "(\\@[[:alpha:]]+)(::([\\p{L}]+))?",
      "beginCaptures": {
        "1": {
          "name": "entity.name.block.action.named.antlr"
        },
        "2": {
          "name": "support.constant.action.named.antlr"
        }
      },
      "end": "(?<=\\})",
      "patterns": [{
        "name": "meta.action.block.antlr",
        "begin": "{",
        "end": "}",
        "patterns": [{
            "include": "#comments"
          },
          {
            "include": "#action"
          }
        ]
      }]
    },

    {
      "name": "meta.rule.lexer.antlr",
      "begin": "^(\\s*)(fragment)?(\\s*)([[:upper:]][[:alnum:]_]*)",
      "beginCaptures": {
        "2": {
          "name": "keyword.other.antlr"
        },
        "4": {
          "name": "entity.name.function.lexer.antlr"
        }
      },
      "end": "(?<=\\;)",
      "patterns": [{
          "name": "meta.action.lexer.antlr",
          "begin": "(->)\\s*([\\p{L}]+)",
          "beginCaptures": {
            "1": {
              "name": "entity.other.pointer.antlr"
            },
            "2": {
              "name": "entity.name.function.antlr"
            }
          },
          "end": "(?<=\\;)",
          "patterns": [{
              "match": "[\\w]+",
              "name": "entity.name.function.antlr"
            },
            {
              "match": "\\(([\\w]+)\\)",
              "name": "variable.parameter.action.lexer.antlr"
            }
          ]
        },

        {
          "include": "#comments"
        },
        {
          "include": "#character-range"
        },
        {
          "include": "#strings"
        },
        {
          "include": "#numeric"
        },
        {
          "include": "#lexer-rule-reference"
        },
        {
          "include": "#predicate"
        },
        {
          "include": "#action"
        },
        {
          "include": "#wildcard-regexp"
        },
        {
          "include": "#regexp-parts"
        }
      ]
    },

    {
      "name": "meta.rule.parser.antlr",
      "begin": "^(\\s*)([[:lower:]][[:alnum:]_]*)",
      "beginCaptures": {
        "0": {
          "name": "entity.name.function.parser.antlr"
        }
      },
      "end": "(?<=;)",
      "patterns": [{
          "name": "variable.other",
          "match": "\\[.*?\\]"
        },
        {
          "name": "keyword.other.antlr",
          "match": "\\b(returns|locals)\\b"
        },
        {
          "name": "keyword.other.antlr",
          "match": "@\\w+"
        },
        {
          "name": "entity.other.rule.option",
          "match": " <.*?>"
        },
        {
          "name": "variable.other.antlr",
          "match": "\\w+\\s*="
        },
        {
          "name": "entity.name.tag.antlr",
          "match": "#\\s*[[:alnum:]_]+"
        },

        {
          "include": "#comments"
        },
        {
          "include": "#strings"
        },
        {
          "include": "#lexer-rule-reference"
        },
        {
          "include": "#parser-rule-reference"
        },
        {
          "include": "#predicate"
        },
        {
          "include": "#action"
        },
        {
          "include": "#wildcard-regexp"
        },
        {
          "include": "#regexp-parts"
        },
        {
          "include": "#options-list"
        }

      ]
    }
  ],

  "repository": {
    "identifier": {
      "name": "constant.other.antlr",
      "match": "\\b\\D\\w*\\b"
    },

    "comments": {
      "patterns": [{
          "name": "comment.block.antlr",
          "begin": "\/\\*",
          "end": "\\*\/"
        },
        {
          "name": "comment.line.double-slash.antlr",
          "match": "\/\/.*"
        }
      ]
    },

    "strings": {
      "name": "string.quoted.single.antlr",
      "begin": "'",
      "end": "'",
      "patterns": [{
        "match": "\\\\(u\\h{4}|.)",
        "name": "constant.character.escape.antlr"
      }]
    },

    "numeric": {
      "name": "constant.numeric.antlr",
      "match": "\\d+"
    },

    "action": {
      "name": "entity.other.block.antlr",
      "begin": "\\{",
      "end": "\\}",
      "patterns" : [
        { "include" : "#action" }
      ]
    },

    "character-range": {
      "name": "constant.other.antlr",
      "begin": "~?\\[",
      "end": "\\](\\*|\\+|\\?)?",
      "patterns": [{
        "match": "\\\\(u\\h{4}|.)",
        "name": "constant.character.escape.antlr"
      }]
    },

    "wildcard-regexp": {
      "name": "string.regexp.antlr",
      "match": "\\.((\\*|\\+)\\??)?"
    },

    "regexp-parts": {
      "name": "string.regexp.antlr",
      "match": "(\\~|\\?|\\+(?!=)|\\*)(\\?)?"
    },

    "options-list": {
      "name": "meta.options.antlr",
      "end": "(?<=\\})",
      "begin": "\\boptions\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.other.options.antlr"
        }
      },
      "patterns": [{
        "name": "meta.options.block.antlr",
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.block.begin.antlr"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.block.end.antlr"
          }
        },
        "patterns": [{
            "name": "variable.other.option.antlr",
            "match": "\\b(superClass|language|tokenVocab|TokenLabelType|contextSuperClass|exportMacro)\\b"
          },
          {
            "include": "#strings"
          },
          {
            "include": "#comments"
          },
          {
            "include": "#identifier"
          },
          {
            "include": "#numeric"
          }
        ]
      }]
    },

    "lexer-rule-reference": {
      "name": "support.other.token.lexer.antlr",
      "match": "\\b[[:upper:]][[:alnum:]_]*(?!\\s*:)"
    },

    "parser-rule-reference": {
      "name": "support.function.parser.antlr",
      "match": "\\b[[:lower:]][[:alnum:]_]*(?!\\s*:)"
    },

    "predicate": {
      "name": "entity.other.predicate.antlr",
      "match": "\\{.*?\\}\\?"
    }
  }
}`;
