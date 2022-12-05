// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "1",

      macros: [
        { function: "__e" },
        { function: "__c", vtp_value: "google.co.in" },
        { function: "__c", vtp_value: 0 },
        { vtp_signal: 0, function: "__c", vtp_value: 0 },
      ],
      tags: [
        {
          function: "__gct",
          vtp_trackingId: "G-LTF3L1GDT3",
          vtp_sessionDuration: 0,
          tag_id: 1,
        },
        {
          function: "__ccd_em_site_search",
          vtp_searchQueryParams: "q,s,search,query,keyword",
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-LTF3L1GDT3",
          tag_id: 3,
        },
        {
          function: "__ccd_conversion_marking",
          vtp_conversionRules: [
            "list",
            [
              "map",
              "matchingRules",
              '{"type":5,"args":[{"stringValue":"purchase"},{"contextValue":{"namespaceType":1,"keyParts":["eventName"]}}]}',
            ],
          ],
          vtp_instanceDestinationId: "G-LTF3L1GDT3",
          tag_id: 5,
        },
        {
          function: "__ccd_ga_regscope",
          vtp_settingsTable: [
            "list",
            [
              "map",
              "redactFieldGroup",
              "DEVICE_AND_GEO",
              "disallowAllRegions",
              false,
              "disallowedRegions",
              "",
            ],
            [
              "map",
              "redactFieldGroup",
              "GOOGLE_SIGNALS",
              "disallowAllRegions",
              true,
              "disallowedRegions",
              "",
            ],
          ],
          vtp_instanceDestinationId: "G-LTF3L1GDT3",
          tag_id: 6,
        },
        {
          function: "__ccd_em_download",
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-LTF3L1GDT3",
          tag_id: 7,
        },
        {
          function: "__ccd_em_page_view",
          vtp_historyEvents: true,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-LTF3L1GDT3",
          tag_id: 8,
        },
        {
          function: "__ccd_em_scroll",
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-LTF3L1GDT3",
          tag_id: 9,
        },
        {
          function: "__ccd_em_outbound_click",
          priority: 0,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-LTF3L1GDT3",
          tag_id: 10,
        },
        {
          function: "__set_product_settings",
          vtp_instanceDestinationId: "G-LTF3L1GDT3",
          vtp_foreignTldMacroResult: ["macro", 1],
          vtp_isChinaVipRegionMacroResult: ["macro", 2],
          tag_id: 11,
        },
        {
          function: "__ogt_google_signals",
          vtp_googleSignals: "DISABLED",
          vtp_instanceDestinationId: "G-LTF3L1GDT3",
          vtp_serverMacroResult: ["macro", 3],
          tag_id: 12,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.init" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
        [
          ["if", 1],
          ["add", 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__ccd_em_scroll",
        [46, "a"],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnScroll"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", ["require", "internal.getProductSettingsParameter"]],
        [52, "f", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "g",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [
          22,
          ["e", [15, "g"], "ae_block_scroll"],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          52,
          "h",
          [
            "c",
            [8, "verticalThresholdUnits", "PERCENT", "verticalThresholds", 90],
          ],
        ],
        [22, [28, [15, "h"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          "b",
          "gtm.scrollDepth",
          [
            51,
            "",
            [7, "i", "j"],
            ["j"],
            [
              52,
              "k",
              [
                39,
                [28, [28, [17, [15, "a"], "includeParams"]]],
                [8, "percent_scrolled", [16, [15, "i"], "gtm.scrollThreshold"]],
                [8],
              ],
            ],
            ["f", [15, "g"], "scroll", [15, "k"]],
          ],
          [15, "h"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__set_product_settings",
        [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [
          52,
          "d",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["c"], "containerId"],
          ],
        ],
        [
          "b",
          [15, "d"],
          "google_tld",
          [17, [15, "a"], "foreignTldMacroResult"],
        ],
        [
          "b",
          [15, "d"],
          "ga_restrict_domain",
          [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_site_search",
        [46, "a"],
        [
          50,
          "e",
          [46, "i"],
          [52, "j", [2, [30, [15, "i"], ""], "split", [7, ","]]],
          [
            53,
            [41, "k"],
            [3, "k", 0],
            [
              63,
              [7, "k"],
              [23, [15, "k"], [17, [15, "j"], "length"]],
              [33, [15, "k"], [3, "k", [0, [15, "k"], 1]]],
              [
                46,
                [
                  53,
                  [
                    52,
                    "l",
                    ["b", [2, [16, [15, "j"], [15, "k"]], "trim", [7]]],
                  ],
                  [22, [21, [15, "l"], [44]], [46, [36, [15, "l"]]]],
                ],
              ],
            ],
          ],
        ],
        [
          50,
          "f",
          [46, "i", "j"],
          [52, "k", [8, "search_term", [15, "i"]]],
          [52, "l", [2, [30, [15, "j"], ""], "split", [7, ","]]],
          [
            53,
            [41, "m"],
            [3, "m", 0],
            [
              63,
              [7, "m"],
              [23, [15, "m"], [17, [15, "l"], "length"]],
              [33, [15, "m"], [3, "m", [0, [15, "m"], 1]]],
              [
                46,
                [
                  53,
                  [52, "n", [2, [16, [15, "l"], [15, "m"]], "trim", [7]]],
                  [52, "o", ["b", [15, "n"]]],
                  [
                    22,
                    [21, [15, "o"], [44]],
                    [46, [43, [15, "k"], [0, "q_", [15, "n"]], [15, "o"]]],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "k"]],
        ],
        [52, "b", ["require", "getQueryParameters"]],
        [52, "c", ["require", "internal.sendGtagEvent"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "g", ["e", [17, [15, "a"], "searchQueryParams"]]],
        [
          52,
          "h",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [
          22,
          [15, "g"],
          [
            46,
            [
              53,
              [
                52,
                "i",
                [
                  39,
                  [28, [28, [17, [15, "a"], "includeParams"]]],
                  ["f", [15, "g"], [17, [15, "a"], "additionalQueryParams"]],
                  [8],
                ],
              ],
              [
                "c",
                [15, "h"],
                "view_search_results",
                [15, "i"],
                [8, "deferrable", true],
              ],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_ga_regscope",
        [46, "a"],
        [
          50,
          "k",
          [46, "m"],
          [
            22,
            [30, [28, [15, "i"]], [21, [17, [15, "i"], "length"], 2]],
            [46, [36, false]],
          ],
          [52, "n", ["l", [15, "m"]]],
          [
            53,
            [41, "o"],
            [3, "o", 0],
            [
              63,
              [7, "o"],
              [23, [15, "o"], [17, [15, "n"], "length"]],
              [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]],
              [
                46,
                [
                  53,
                  [52, "p", [16, [15, "n"], [15, "o"]]],
                  [52, "q", [17, [15, "p"], "countryCode"]],
                  [52, "r", [17, [15, "p"], "regionCode"]],
                  [52, "s", [20, [15, "q"], [15, "i"]]],
                  [52, "t", [30, [28, [15, "r"]], [20, [15, "r"], [15, "j"]]]],
                  [22, [1, [15, "s"], [15, "t"]], [46, [36, true]]],
                ],
              ],
            ],
          ],
          [36, false],
        ],
        [
          50,
          "l",
          [46, "m"],
          [52, "n", [7]],
          [22, [28, [15, "m"]], [46, [36, [15, "n"]]]],
          [52, "o", [2, [15, "m"], "split", [7, ","]]],
          [
            53,
            [41, "p"],
            [3, "p", 0],
            [
              63,
              [7, "p"],
              [23, [15, "p"], [17, [15, "o"], "length"]],
              [33, [15, "p"], [3, "p", [0, [15, "p"], 1]]],
              [
                46,
                [
                  53,
                  [52, "q", [2, [16, [15, "o"], [15, "p"]], "trim", [7]]],
                  [22, [28, [15, "q"]], [46, [6]]],
                  [52, "r", [2, [15, "q"], "split", [7, "-"]]],
                  [52, "s", [16, [15, "r"], 0]],
                  [
                    52,
                    "t",
                    [39, [20, [17, [15, "r"], "length"], 2], [15, "q"], [44]],
                  ],
                  [
                    22,
                    [30, [28, [15, "s"]], [21, [17, [15, "s"], "length"], 2]],
                    [46, [6]],
                  ],
                  [
                    22,
                    [
                      1,
                      [21, [15, "t"], [44]],
                      [
                        30,
                        [23, [17, [15, "t"], "length"], 4],
                        [18, [17, [15, "t"], "length"], 6],
                      ],
                    ],
                    [46, [6]],
                  ],
                  [
                    2,
                    [15, "n"],
                    "push",
                    [7, [8, "countryCode", [15, "s"], "regionCode", [15, "t"]]],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "n"]],
        ],
        [52, "b", ["require", "getContainerVersion"]],
        [52, "c", ["require", "internal.setRemoteConfigParameter"]],
        [52, "d", ["require", "internal.getCountryCode"]],
        [52, "e", ["require", "internal.getRegionCode"]],
        [
          22,
          [28, [17, [15, "a"], "settingsTable"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [41, "f"],
        [
          52,
          "g",
          [
            8,
            "GOOGLE_SIGNALS",
            [7, [8, "name", "allow_google_signals", "value", false]],
            "DEVICE_AND_GEO",
            [
              7,
              [8, "name", "geo_granularity", "value", true],
              [8, "name", "redact_device_info", "value", true],
            ],
          ],
        ],
        [
          52,
          "h",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["b"], "containerId"],
          ],
        ],
        [52, "i", ["d"]],
        [52, "j", ["e"]],
        [
          53,
          [41, "m"],
          [3, "m", 0],
          [
            63,
            [7, "m"],
            [23, [15, "m"], [17, [17, [15, "a"], "settingsTable"], "length"]],
            [33, [15, "m"], [3, "m", [0, [15, "m"], 1]]],
            [
              46,
              [
                53,
                [52, "n", [16, [17, [15, "a"], "settingsTable"], [15, "m"]]],
                [
                  22,
                  [
                    30,
                    [17, [15, "n"], "disallowAllRegions"],
                    ["k", [17, [15, "n"], "disallowedRegions"]],
                  ],
                  [
                    46,
                    [
                      53,
                      [
                        52,
                        "o",
                        [16, [15, "g"], [17, [15, "n"], "redactFieldGroup"]],
                      ],
                      [22, [28, [15, "o"]], [46, [6]]],
                      [
                        53,
                        [41, "p"],
                        [3, "p", 0],
                        [
                          63,
                          [7, "p"],
                          [23, [15, "p"], [17, [15, "o"], "length"]],
                          [33, [15, "p"], [3, "p", [0, [15, "p"], 1]]],
                          [
                            46,
                            [
                              53,
                              [52, "q", [16, [15, "o"], [15, "p"]]],
                              [
                                "c",
                                [15, "h"],
                                [17, [15, "q"], "name"],
                                [17, [15, "q"], "value"],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_page_view",
        [46, "a"],
        [
          22,
          [28, [17, [15, "a"], "historyEvents"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnHistoryChange"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", ["require", "internal.getProductSettingsParameter"]],
        [52, "f", ["require", "internal.sendGtagEvent"]],
        [52, "g", ["require", "internal.setRemoteConfigParameter"]],
        [
          52,
          "h",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [
          22,
          ["e", [15, "h"], "ae_block_history"],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "i", ["c", [8, "interval", 1000]]],
        [22, [28, [15, "i"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          "b",
          "gtm.historyChange-v2",
          [
            51,
            "",
            [7, "j", "k"],
            ["k"],
            [52, "l", [16, [15, "j"], "gtm.oldUrl"]],
            [22, [20, [16, [15, "j"], "gtm.newUrl"], [15, "l"]], [46, [36]]],
            [52, "m", [16, [15, "j"], "gtm.historyChangeSource"]],
            [
              22,
              [
                1,
                [1, [21, [15, "m"], "pushState"], [21, [15, "m"], "popstate"]],
                [21, [15, "m"], "replaceState"],
              ],
              [46, [36]],
            ],
            [
              52,
              "n",
              [
                39,
                [28, [28, [17, [15, "a"], "includeParams"]]],
                [
                  8,
                  "page_location",
                  [16, [15, "j"], "gtm.newUrl"],
                  "page_referrer",
                  [15, "l"],
                ],
                [8],
              ],
            ],
            ["f", [15, "h"], "page_view", [15, "n"]],
            ["g", [15, "h"], "page_referrer", [15, "l"]],
          ],
          [15, "i"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_outbound_click",
        [46, "a"],
        [
          50,
          "j",
          [46, "p"],
          [22, [28, [15, "p"]], [46, [36, [44]]]],
          [41, "q"],
          [3, "q", ""],
          [
            22,
            [1, [15, "p"], [17, [15, "p"], "href"]],
            [
              46,
              [
                53,
                [41, "r"],
                [3, "r", [2, [17, [15, "p"], "href"], "indexOf", [7, "#"]]],
                [
                  3,
                  "q",
                  [
                    39,
                    [23, [15, "r"], 0],
                    [17, [15, "p"], "href"],
                    [
                      2,
                      [17, [15, "p"], "href"],
                      "substring",
                      [7, 0, [15, "r"]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "q"]],
        ],
        [
          50,
          "k",
          [46, "p"],
          [22, [28, [15, "p"]], [46, [36, [44]]]],
          [41, "q"],
          [3, "q", [17, [15, "p"], "hostname"]],
          [52, "r", [2, [15, "q"], "match", [7, "^www\\d*\\."]]],
          [
            22,
            [1, [15, "r"], [16, [15, "r"], 0]],
            [
              46,
              [
                3,
                "q",
                [
                  2,
                  [15, "q"],
                  "substring",
                  [7, [17, [16, [15, "r"], 0], "length"]],
                ],
              ],
            ],
          ],
          [36, [15, "q"]],
        ],
        [
          50,
          "l",
          [46, "p"],
          [22, [28, [15, "p"]], [46, [36, false]]],
          [52, "q", [2, [17, [15, "p"], "hostname"], "toLowerCase", [7]]],
          [41, "r"],
          [3, "r", [2, ["k", ["h", ["g"]]], "toLowerCase", [7]]],
          [41, "s"],
          [3, "s", [37, [17, [15, "q"], "length"], [17, [15, "r"], "length"]]],
          [
            22,
            [
              1,
              [18, [15, "s"], 0],
              [29, [2, [15, "r"], "charAt", [7, 0]], "."],
            ],
            [
              46,
              [32, [15, "s"], [3, "s", [37, [15, "s"], 1]]],
              [3, "r", [0, ".", [15, "r"]]],
            ],
          ],
          [
            22,
            [
              1,
              [19, [15, "s"], 0],
              [
                12,
                [2, [15, "q"], "indexOf", [7, [15, "r"], [15, "s"]]],
                [15, "s"],
              ],
            ],
            [46, [36, false]],
          ],
          [36, true],
        ],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", ["require", "internal.getProductSettingsParameter"]],
        [52, "f", ["require", "internal.getRemoteConfigParameter"]],
        [52, "g", ["require", "getUrl"]],
        [52, "h", ["require", "parseUrl"]],
        [52, "i", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "m",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [52, "n", ["f", [15, "m"], "cross_domain_conditions"]],
        [
          22,
          ["e", [15, "m"], "ae_block_outbound_click"],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          52,
          "o",
          [
            "c",
            [
              8,
              "affiliateDomains",
              [15, "n"],
              "checkValidation",
              true,
              "waitForTags",
              false,
            ],
          ],
        ],
        [22, [28, [15, "o"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          "b",
          "gtm.linkClick",
          [
            51,
            "",
            [7, "p", "q"],
            [52, "r", ["h", [16, [15, "p"], "gtm.elementUrl"]]],
            [
              22,
              ["l", [15, "r"]],
              [
                46,
                [
                  53,
                  [
                    52,
                    "s",
                    [
                      39,
                      [28, [28, [17, [15, "a"], "includeParams"]]],
                      [
                        8,
                        "link_id",
                        [16, [15, "p"], "gtm.elementId"],
                        "link_classes",
                        [16, [15, "p"], "gtm.elementClasses"],
                        "link_url",
                        ["j", [15, "r"]],
                        "link_domain",
                        ["k", [15, "r"]],
                        "outbound",
                        true,
                      ],
                      [8],
                    ],
                  ],
                  [43, [15, "s"], "event_callback", [15, "q"]],
                  ["i", [15, "m"], "click", [15, "s"]],
                ],
              ],
              [46, ["q"]],
            ],
          ],
          [15, "o"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_download",
        [46, "a"],
        [
          50,
          "i",
          [46, "o"],
          [
            36,
            [
              1,
              [15, "o"],
              [
                21,
                [
                  2,
                  [2, [15, "o"], "toLowerCase", [7]],
                  "match",
                  [7, [15, "h"]],
                ],
                [45],
              ],
            ],
          ],
        ],
        [
          50,
          "j",
          [46, "o"],
          [52, "p", [2, [17, [15, "o"], "pathname"], "split", [7, "."]]],
          [
            52,
            "q",
            [
              39,
              [18, [17, [15, "p"], "length"], 1],
              [16, [15, "p"], [37, [17, [15, "p"], "length"], 1]],
              "",
            ],
          ],
          [36, [16, [2, [15, "q"], "split", [7, "/"]], 0]],
        ],
        [
          50,
          "k",
          [46, "o"],
          [
            36,
            [
              39,
              [
                12,
                [2, [17, [15, "o"], "pathname"], "substring", [7, 0, 1]],
                "/",
              ],
              [17, [15, "o"], "pathname"],
              [0, "/", [17, [15, "o"], "pathname"]],
            ],
          ],
        ],
        [
          50,
          "l",
          [46, "o"],
          [41, "p"],
          [3, "p", ""],
          [
            22,
            [1, [15, "o"], [17, [15, "o"], "href"]],
            [
              46,
              [
                53,
                [41, "q"],
                [3, "q", [2, [17, [15, "o"], "href"], "indexOf", [7, "#"]]],
                [
                  3,
                  "p",
                  [
                    39,
                    [23, [15, "q"], 0],
                    [17, [15, "o"], "href"],
                    [
                      2,
                      [17, [15, "o"], "href"],
                      "substring",
                      [7, 0, [15, "q"]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "p"]],
        ],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", ["require", "internal.getProductSettingsParameter"]],
        [52, "f", ["require", "parseUrl"]],
        [52, "g", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "h",
          [
            0,
            "pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|",
            "mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma",
          ],
        ],
        [
          52,
          "m",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [
          22,
          ["e", [15, "m"], "ae_block_downloads"],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "n", ["c", [8, "checkValidation", true]]],
        [22, [28, [15, "n"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          "b",
          "gtm.linkClick",
          [
            51,
            "",
            [7, "o", "p"],
            ["p"],
            [52, "q", [16, [15, "o"], "gtm.elementUrl"]],
            [52, "r", ["f", [15, "q"]]],
            [22, [28, [15, "r"]], [46, [36]]],
            [52, "s", ["j", [15, "r"]]],
            [
              22,
              ["i", [15, "s"]],
              [
                46,
                [
                  53,
                  [
                    52,
                    "t",
                    [
                      39,
                      [28, [28, [17, [15, "a"], "includeParams"]]],
                      [
                        8,
                        "link_id",
                        [16, [15, "o"], "gtm.elementId"],
                        "link_url",
                        ["l", [15, "r"]],
                        "link_text",
                        [16, [15, "o"], "gtm.elementText"],
                        "file_name",
                        ["k", [15, "r"]],
                        "file_extension",
                        [15, "s"],
                      ],
                      [8],
                    ],
                  ],
                  ["g", [15, "m"], "file_download", [15, "t"]],
                ],
              ],
            ],
          ],
          [15, "n"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ogt_google_signals",
        [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [
          52,
          "d",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [
          52,
          "e",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["c"], "containerId"],
          ],
        ],
        [
          "b",
          [15, "e"],
          "google_signals",
          [20, [17, [15, "a"], "serverMacroResult"], 1],
        ],
        [
          22,
          [17, [15, "d"], "enableGa4OnoRemarketing"],
          [
            46,
            [
              "b",
              [15, "e"],
              "google_ono",
              [20, [17, [15, "a"], "serverMacroResult"], 2],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_conversion_marking",
        [46, "a"],
        [
          50,
          "h",
          [46, "i"],
          [52, "j", [2, [15, "e"], "parse", [7, [15, "i"]]]],
          [
            22,
            [
              30,
              [30, [28, [15, "j"]], [28, [16, [15, "j"], "args"]]],
              [21, [17, [16, [15, "j"], "args"], "length"], 2],
            ],
            [46, [36]],
          ],
          [52, "k", [16, [16, [16, [15, "j"], "args"], 1], "contextValue"]],
          [
            22,
            [
              30,
              [
                30,
                [
                  30,
                  [28, [15, "k"]],
                  [21, [16, [15, "k"], "namespaceType"], 1],
                ],
                [21, [17, [16, [15, "k"], "keyParts"], "length"], 1],
              ],
              [21, [16, [16, [15, "k"], "keyParts"], 0], "eventName"],
            ],
            [46, [36, [44]]],
          ],
          [52, "l", [16, [16, [15, "j"], "args"], 0]],
          [36, [1, [15, "l"], [16, [15, "l"], "stringValue"]]],
        ],
        [
          22,
          [
            30,
            [28, [17, [15, "a"], "conversionRules"]],
            [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0],
          ],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]]],
        ],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", ["require", "JSON"]],
        [
          52,
          "f",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [52, "g", [30, ["c", [15, "f"], "event_settings"], [8]]],
        [
          53,
          [41, "i"],
          [3, "i", 0],
          [
            63,
            [7, "i"],
            [23, [15, "i"], [17, [17, [15, "a"], "conversionRules"], "length"]],
            [33, [15, "i"], [3, "i", [0, [15, "i"], 1]]],
            [
              46,
              [
                53,
                [
                  52,
                  "j",
                  [
                    "h",
                    [
                      16,
                      [16, [17, [15, "a"], "conversionRules"], [15, "i"]],
                      "matchingRules",
                    ],
                  ],
                ],
                [22, [28, [15, "j"]], [46, [6]]],
                [41, "k"],
                [3, "k", [16, [15, "g"], [15, "j"]]],
                [
                  22,
                  [28, [15, "k"]],
                  [46, [3, "k", [8]], [43, [15, "g"], [15, "j"], [15, "k"]]],
                ],
                [43, [15, "k"], "conversion", true],
              ],
            ],
          ],
        ],
        ["b", [15, "f"], "event_settings", [15, "g"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
    ],
    permissions: {
      __ccd_em_scroll: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.scrollDepth"],
        },
        process_dom_events: {
          targets: [
            { targetType: "window", eventName: "resize" },
            { targetType: "window", eventName: "scroll" },
          ],
        },
        read_container_data: {},
      },
      __set_product_settings: { read_container_data: {} },
      __ccd_em_site_search: {
        get_url: { urlParts: "any", queriesAllowed: "any" },
        read_container_data: {},
      },
      __ccd_ga_regscope: { read_container_data: {} },
      __ccd_em_page_view: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.historyChange-v2"],
        },
        process_dom_events: {
          targets: [
            { targetType: "window", eventName: "pushstate" },
            { targetType: "window", eventName: "popstate" },
          ],
        },
        read_container_data: {},
      },
      __ccd_em_outbound_click: {
        get_url: { urlParts: "any", queriesAllowed: "any" },
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.linkClick"],
        },
        process_dom_events: {
          targets: [
            { targetType: "document", eventName: "click" },
            { targetType: "document", eventName: "auxclick" },
          ],
        },
        read_container_data: {},
      },
      __ccd_em_download: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.linkClick"],
        },
        process_dom_events: {
          targets: [
            { targetType: "document", eventName: "click" },
            { targetType: "document", eventName: "auxclick" },
          ],
        },
        read_container_data: {},
      },
      __ogt_google_signals: { read_container_data: {} },
      __ccd_conversion_marking: { read_container_data: {} },
    },

    security_groups: {
      google: [
        "__ccd_em_scroll",
        "__set_product_settings",
        "__ccd_em_site_search",
        "__ccd_ga_regscope",
        "__ccd_em_page_view",
        "__ccd_em_outbound_click",
        "__ccd_em_download",
        "__ogt_google_signals",
        "__ccd_conversion_marking",
      ],
    },
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var l,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca = function (a) {
      return (a.raw = a);
    },
    da =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ea;
  if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
  else {
    var fa;
    a: {
      var ha = { a: !0 },
        ia = {};
      try {
        ia.__proto__ = ha;
        fa = ia.a;
        break a;
      } catch (a) {}
      fa = !1;
    }
    ea = fa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ja = ea,
    ka = function (a, b) {
      a.prototype = da(b.prototype);
      a.prototype.constructor = a;
      if (ja) ja(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Vk = b.prototype;
    },
    la = this || self,
    ma = function (a) {
      return a;
    };
  var na = function (a, b) {
    this.g = a;
    this.o = b;
  };
  var pa = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    },
    qa = function () {
      this.C = {};
      this.B = !1;
      this.I = {};
    },
    sa = function (a, b) {
      var c = [],
        d;
      for (d in a.C)
        if (a.C.hasOwnProperty(d))
          switch (((d = d.substr(5)), b)) {
            case 1:
              c.push(d);
              break;
            case 2:
              c.push(a.get(d));
              break;
            case 3:
              c.push([d, a.get(d)]);
          }
      return c;
    };
  qa.prototype.get = function (a) {
    return this.C["dust." + a];
  };
  qa.prototype.set = function (a, b) {
    this.B || ((a = "dust." + a), this.I.hasOwnProperty(a) || (this.C[a] = b));
  };
  qa.prototype.has = function (a) {
    return this.C.hasOwnProperty("dust." + a);
  };
  var ta = function (a, b) {
    b = "dust." + b;
    a.B || a.I.hasOwnProperty(b) || delete a.C[b];
  };
  qa.prototype.Fb = function () {
    this.B = !0;
  };
  var va = function (a) {
    this.o = new qa();
    this.g = [];
    this.B = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (pa(b) ? (this.g[Number(b)] = a[Number(b)]) : this.o.set(b, a[b]));
  };
  l = va.prototype;
  l.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.g.length; c++) {
      var d = this.g[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof va
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(d.toString());
    }
    return b.join(",");
  };
  l.set = function (a, b) {
    if (!this.B)
      if ("length" === a) {
        if (!pa(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.g.length = Number(b);
      } else pa(a) ? (this.g[Number(a)] = b) : this.o.set(a, b);
  };
  l.get = function (a) {
    return "length" === a
      ? this.length()
      : pa(a)
      ? this.g[Number(a)]
      : this.o.get(a);
  };
  l.length = function () {
    return this.g.length;
  };
  l.Eb = function () {
    for (var a = sa(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + "");
    return new va(a);
  };
  var wa = function (a, b) {
    pa(b) ? delete a.g[Number(b)] : ta(a.o, b);
  };
  l = va.prototype;
  l.pop = function () {
    return this.g.pop();
  };
  l.push = function (a) {
    return this.g.push.apply(this.g, Array.prototype.slice.call(arguments));
  };
  l.shift = function () {
    return this.g.shift();
  };
  l.splice = function (a, b, c) {
    return new va(this.g.splice.apply(this.g, arguments));
  };
  l.unshift = function (a) {
    return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments));
  };
  l.has = function (a) {
    return (pa(a) && this.g.hasOwnProperty(a)) || this.o.has(a);
  };
  l.Fb = function () {
    this.B = !0;
    Object.freeze(this.g);
    this.o.Fb();
  };
  var xa = function () {
    function a(f, g) {
      if (b[f]) {
        if (b[f].Zd + g > b[f].max) throw Error("Quota exceeded");
        b[f].Zd += g;
      }
    }
    var b = {},
      c = void 0,
      d = void 0,
      e = {
        Mj: function (f) {
          c = f;
        },
        eh: function () {
          c && a(c, 1);
        },
        Oj: function (f) {
          d = f;
        },
        Hb: function (f) {
          d && a(d, f);
        },
        mk: function (f, g) {
          b[f] = b[f] || { Zd: 0 };
          b[f].max = g;
        },
        mj: function (f) {
          return (b[f] && b[f].Zd) || 0;
        },
        reset: function () {
          b = {};
        },
        Zi: a,
      };
    e.onFnConsume = e.Mj;
    e.consumeFn = e.eh;
    e.onStorageConsume = e.Oj;
    e.consumeStorage = e.Hb;
    e.setMax = e.mk;
    e.getConsumed = e.mj;
    e.reset = e.reset;
    e.consume = e.Zi;
    return e;
  };
  var ya = function (a, b) {
    this.B = a;
    this.R = function (c, d, e) {
      return c.apply(d, e);
    };
    this.C = b;
    this.o = new qa();
    this.g = this.I = void 0;
  };
  ya.prototype.add = function (a, b) {
    za(this, a, b, !1);
  };
  var za = function (a, b, c, d) {
    if (!a.o.B)
      if (
        (a.B.Hb(
          ("string" === typeof b ? b.length : 1) +
            ("string" === typeof c ? c.length : 1)
        ),
        d)
      ) {
        var e = a.o;
        e.set(b, c);
        e.I["dust." + b] = !0;
      } else a.o.set(b, c);
  };
  ya.prototype.set = function (a, b) {
    this.o.B ||
      (!this.o.has(a) && this.C && this.C.has(a)
        ? this.C.set(a, b)
        : (this.B.Hb(
            ("string" === typeof a ? a.length : 1) +
              ("string" === typeof b ? b.length : 1)
          ),
          this.o.set(a, b)));
  };
  ya.prototype.get = function (a) {
    return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0;
  };
  ya.prototype.has = function (a) {
    return !!this.o.has(a) || !(!this.C || !this.C.has(a));
  };
  var Aa = function (a) {
    var b = new ya(a.B, a);
    a.I && (b.I = a.I);
    b.R = a.R;
    b.g = a.g;
    return b;
  };
  var Ba = function () {},
    Ca = function (a) {
      return "function" === typeof a;
    },
    m = function (a) {
      return "string" === typeof a;
    },
    Da = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Ea = Array.isArray,
    Fa = function (a, b) {
      if (a && Ea(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ga = function (a, b) {
      if (!Da(a) || !Da(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ia = function (a, b) {
      for (var c = new Ha(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    Ka = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    La = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Ma = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Na = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Oa = function (a) {
      var b = [];
      if (Ea(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Pa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Qa = function () {
      return new Date(Date.now());
    },
    Ra = function () {
      return Qa().getTime();
    },
    Ha = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Ha.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ha.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Sa = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ta = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ua = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Wa = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Xa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ya = function (a, b) {
      var c = z;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    Za = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    $a = /^\w{1,9}$/,
    ab = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      Ka(a, function (d, e) {
        $a.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    bb = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var cb = function (a, b) {
    qa.call(this);
    this.R = a;
    this.ma = b;
  };
  ka(cb, qa);
  cb.prototype.toString = function () {
    return this.R;
  };
  cb.prototype.Eb = function () {
    return new va(sa(this, 1));
  };
  cb.prototype.g = function (a, b) {
    a.B.eh();
    return this.ma.apply(
      new db(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  cb.prototype.o = function (a, b) {
    try {
      return this.g.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var fb = function (a, b) {
      for (
        var c, d = 0;
        d < b.length && !((c = eb(a, b[d])), c instanceof na);
        d++
      );
      return c;
    },
    eb = function (a, b) {
      try {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof cb))
          throw Error("Attempting to execute non-function " + b[0] + ".");
        return c.g.apply(c, [a].concat(b.slice(1)));
      } catch (e) {
        var d = a.I;
        d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
        throw e;
      }
    },
    db = function (a, b) {
      this.o = a;
      this.g = b;
    },
    G = function (a, b) {
      return Ea(b) ? eb(a.g, b) : b;
    },
    H = function (a) {
      return a.o.R;
    };
  var gb = function () {
    qa.call(this);
  };
  ka(gb, qa);
  gb.prototype.Eb = function () {
    return new va(sa(this, 1));
  };
  var hb = {
    control: function (a, b) {
      return new na(a, G(this, b));
    },
    fn: function (a, b, c) {
      var d = this.g,
        e = G(this, b);
      if (!(e instanceof va))
        throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      this.g.B.Hb(a.length + f.length);
      return new cb(
        a,
        (function () {
          return function (g) {
            var h = Aa(d);
            void 0 === h.g && (h.g = this.g.g);
            for (
              var k = Array.prototype.slice.call(arguments, 0), n = 0;
              n < k.length;
              n++
            )
              if (((k[n] = G(this, k[n])), k[n] instanceof na)) return k[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new va(k));
            var r = fb(h, f);
            if (r instanceof na) return "return" === r.g ? r.o : r;
          };
        })()
      );
    },
    list: function (a) {
      var b = this.g.B;
      b.Hb(arguments.length);
      for (var c = new va(), d = 0; d < arguments.length; d++) {
        var e = G(this, arguments[d]);
        "string" === typeof e && b.Hb(e.length ? e.length - 1 : 0);
        c.push(e);
      }
      return c;
    },
    map: function (a) {
      for (
        var b = this.g.B, c = new gb(), d = 0;
        d < arguments.length - 1;
        d += 2
      ) {
        var e = G(this, arguments[d]) + "",
          f = G(this, arguments[d + 1]),
          g = e.length;
        g += "string" === typeof f ? f.length : 1;
        b.Hb(g);
        c.set(e, f);
      }
      return c;
    },
    undefined: function () {},
  };
  var ib = function () {
      this.B = xa();
      this.g = new ya(this.B);
    },
    jb = function (a, b, c) {
      var d = new cb(b, c);
      d.Fb();
      a.g.set(b, d);
    },
    kb = function (a, b, c) {
      hb.hasOwnProperty(b) && jb(a, c || b, hb[b]);
    };
  ib.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.o(c);
  };
  ib.prototype.o = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = eb(this.g, arguments[c]);
    return b;
  };
  ib.prototype.C = function (a, b) {
    var c = Aa(this.g);
    c.g = a;
    for (var d, e = 1; e < arguments.length; e++) d = d = eb(c, arguments[e]);
    return d;
  };
  var lb,
    mb = function () {
      if (void 0 === lb) {
        var a = null,
          b = la.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: ma,
              createScript: ma,
              createScriptURL: ma,
            });
          } catch (c) {
            la.console && la.console.error(c.message);
          }
          lb = a;
        } else lb = a;
      }
      return lb;
    };
  var ob = function (a, b) {
    this.g = b === nb ? a : "";
  };
  ob.prototype.toString = function () {
    return this.g + "";
  };
  var pb = function (a) {
      return a instanceof ob && a.constructor === ob
        ? a.g
        : "type_error:TrustedResourceUrl";
    },
    nb = {},
    qb = function (a) {
      var b = a,
        c = mb(),
        d = c ? c.createScriptURL(b) : b;
      return new ob(d, nb);
    };
  var rb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function sb() {
    var a = la.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function tb(a) {
    return -1 != sb().indexOf(a);
  }
  var ub = {},
    vb = function (a, b) {
      this.g = b === ub ? a : "";
    };
  vb.prototype.toString = function () {
    return this.g.toString();
  };
  var wb = function (a) {
      return a instanceof vb && a.constructor === vb
        ? a.g
        : "type_error:SafeHtml";
    },
    xb = function (a) {
      var b = a,
        c = mb(),
        d = c ? c.createHTML(b) : b;
      return new vb(d, ub);
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var yb = {};
  var zb = function () {},
    Ab = function (a) {
      this.g = a;
    };
  ka(Ab, zb);
  Ab.prototype.toString = function () {
    return this.g;
  };
  function Bb(a, b) {
    var c = [new Ab(Cb[0].toLowerCase(), yb)];
    if (0 === c.length) throw Error("No prefixes are provided");
    var d = c.map(function (f) {
        var g;
        if (f instanceof Ab) g = f.g;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function Db(a) {
    if ("script" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeScript.");
    if ("style" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeStyleSheet.");
  }
  var z = window,
    I = document,
    Eb = navigator,
    Fb = I.currentScript && I.currentScript.src,
    Gb = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Hb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Ib = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Jb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Kb(a, b, c) {
    b &&
      Ka(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Lb = function (a, b, c, d) {
      var e = I.createElement("script");
      Kb(e, d, Ib);
      e.type = "text/javascript";
      e.async = !0;
      var f = qb(a);
      e.src = pb(f);
      var g,
        h,
        k,
        n =
          null ==
          (k = (h = ((e.ownerDocument && e.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : k.call(h, "script[nonce]");
      (g = n ? n.nonce || n.getAttribute("nonce") || "" : "") &&
        e.setAttribute("nonce", g);
      Hb(e, b);
      c && (e.onerror = c);
      var p = I.getElementsByTagName("script")[0] || I.body || I.head;
      p.parentNode.insertBefore(e, p);
      return e;
    },
    Mb = function () {
      if (Fb) {
        var a = Fb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Ob = function (a, b, c, d, e) {
      var f = e,
        g = !1;
      f || ((f = I.createElement("iframe")), (g = !0));
      Kb(f, c, Jb);
      d &&
        Ka(d, function (k, n) {
          f.dataset[k] = n;
        });
      f.height = "0";
      f.width = "0";
      f.style.display = "none";
      f.style.visibility = "hidden";
      if (g) {
        var h = (I.body && I.body.lastChild) || I.body || I.head;
        h.parentNode.insertBefore(f, h);
      }
      Hb(f, b);
      void 0 !== a && (f.src = a);
      return f;
    },
    Pb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    Qb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Rb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    J = function (a) {
      z.setTimeout(a, 0);
    },
    Sb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Tb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Ub = function (a) {
      var b = I.createElement("div"),
        c = b,
        d = xb("A<div>" + a + "</div>");
      void 0 !== c.tagName && Db(c);
      c.innerHTML = wb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Vb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Wb = function (a) {
      var b;
      try {
        b = Eb.sendBeacon && Eb.sendBeacon(a);
      } catch (c) {}
      b || Pb(a);
    },
    Xb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    };
  var Yb = function (a, b) {
      return G(this, a) && G(this, b);
    },
    Zb = function (a, b) {
      return G(this, a) === G(this, b);
    },
    $b = function (a, b) {
      return G(this, a) || G(this, b);
    },
    ac = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    bc = function (a, b) {
      a = String(G(this, a));
      b = String(G(this, b));
      return a.substring(0, b.length) === b;
    },
    cc = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      switch (a) {
        case "pageLocation":
          var c = z.location.href;
          b instanceof gb &&
            b.get("stripProtocol") &&
            (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var ec = function () {
    this.g = new ib();
    dc(this);
  };
  ec.prototype.execute = function (a) {
    return this.g.o(a);
  };
  var dc = function (a) {
    kb(a.g, "map");
    var b = function (c, d) {
      jb(a.g, c, d);
    };
    b("and", Yb);
    b("contains", ac);
    b("equals", Zb);
    b("or", $b);
    b("startsWith", bc);
    b("variable", cc);
  };
  var fc = function (a) {
    if (a instanceof fc) return a;
    this.Za = a;
  };
  fc.prototype.toString = function () {
    return String(this.Za);
  };
  var hc = function (a) {
    qa.call(this);
    this.g = a;
    this.set("then", gc(this));
    this.set("catch", gc(this, !0));
    this.set("finally", gc(this, !1, !0));
  };
  ka(hc, gb);
  var gc = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new cb("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof cb || (d = void 0);
      e instanceof cb || (e = void 0);
      var f = Aa(this.g),
        g = function (k) {
          return function (n) {
            return c ? (k.g(f), a.g) : k.g(f, n);
          };
        },
        h = a.g.then(d && g(d), e && g(e));
      return new hc(h);
    });
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var ic = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    jc = function (a) {
      if (null == a) return String(a);
      var b = ic.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    kc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    lc = function (a) {
      if (!a || "object" != jc(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !kc(a, "constructor") &&
          !kc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || kc(a, b);
    },
    mc = function (a, b) {
      var c = b || ("array" == jc(a) ? [] : {}),
        d;
      for (d in a)
        if (kc(a, d)) {
          var e = a[d];
          "array" == jc(e)
            ? ("array" != jc(c[d]) && (c[d] = []), (c[d] = mc(e, c[d])))
            : lc(e)
            ? (lc(c[d]) || (c[d] = {}), (c[d] = mc(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var oc = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, k) {
          for (var n = sa(h, 1), p = 0; p < n.length; p++)
            k[n[p]] = g(h.get(n[p]));
        },
        g = function (h) {
          var k = d.indexOf(h);
          if (-1 < k) return e[k];
          if (h instanceof va) {
            var n = [];
            d.push(h);
            e.push(n);
            for (var p = h.Eb(), q = 0; q < p.length(); q++)
              n[p.get(q)] = g(h.get(p.get(q)));
            return n;
          }
          if (h instanceof hc) return h.g;
          if (h instanceof gb) {
            var r = {};
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          if (h instanceof cb) {
            var t = function () {
              for (
                var v = Array.prototype.slice.call(arguments, 0), x = 0;
                x < v.length;
                x++
              )
                v[x] = nc(v[x], b, c);
              var y = b ? b.B : xa(),
                w = new ya(y);
              b && (w.g = b.g);
              return g(h.g.apply(h, [w].concat(v)));
            };
            d.push(h);
            e.push(t);
            f(h, t);
            return t;
          }
          var u = !1;
          switch (c) {
            case 1:
              u = !0;
              break;
            case 2:
              u = !1;
              break;
            case 3:
              u = !1;
              break;
            default:
          }
          if (h instanceof fc && u) return h.Za;
          switch (typeof h) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return h;
            case "object":
              if (null === h) return null;
          }
        };
      return g(a);
    },
    nc = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, k) {
          for (var n in h) h.hasOwnProperty(n) && k.set(n, g(h[n]));
        },
        g = function (h) {
          var k = d.indexOf(h);
          if (-1 < k) return e[k];
          if (Ea(h) || La(h)) {
            var n = new va([]);
            d.push(h);
            e.push(n);
            for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
            return n;
          }
          if (lc(h)) {
            var q = new gb();
            d.push(h);
            e.push(q);
            f(h, q);
            return q;
          }
          if ("function" === typeof h) {
            var r = new cb("", function (w) {
              for (
                var A = Array.prototype.slice.call(arguments, 0), B = 0;
                B < A.length;
                B++
              )
                A[B] = oc(G(this, A[B]), b, c);
              return g((0, this.g.R)(h, h, A));
            });
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          var x = typeof h;
          if (null === h || "string" === x || "number" === x || "boolean" === x)
            return h;
          var y = !1;
          switch (c) {
            case 1:
              y = !0;
              break;
            case 2:
              y = !1;
              break;
            default:
          }
          if (void 0 !== h && y) return new fc(h);
        };
      return g(a);
    };
  var qc = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    rc = function (a) {
      if (void 0 === a || Ea(a) || lc(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    };
  var sc = {
    supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
      " "
    ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof va)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new va(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
      return new va(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.g(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
      return new va(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.g(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.g(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = qc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : wa(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new va(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = qc(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.g(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : wa(this, d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var tc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(
      " "
    ),
    uc = new na("break"),
    vc = new na("continue"),
    wc = function (a, b) {
      return G(this, a) + G(this, b);
    },
    xc = function (a, b) {
      return G(this, a) && G(this, b);
    },
    yc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      if (!(c instanceof va))
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't read property " + b + " of " + a + ".");
      var d = "number" === typeof a;
      if ("boolean" === typeof a || d) {
        if ("toString" === b) {
          if (d && c.length()) {
            var e = oc(c.get(0));
            try {
              return a.toString(e);
            } catch (q) {}
          }
          return a.toString();
        }
        throw Error("TypeError: " + a + "." + b + " is not a function.");
      }
      if ("string" === typeof a) {
        if (0 <= tc.indexOf(b)) {
          var f = oc(c);
          return nc(a[b].apply(a, f), this.g);
        }
        throw Error("TypeError: " + b + " is not a function");
      }
      if (a instanceof va) {
        if (a.has(b)) {
          var g = a.get(b);
          if (g instanceof cb) {
            var h = qc(c);
            h.unshift(this.g);
            return g.g.apply(g, h);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if (0 <= sc.supportedMethods.indexOf(b)) {
          var k = qc(c);
          k.unshift(this.g);
          return sc[b].apply(a, k);
        }
      }
      if (a instanceof cb || a instanceof gb) {
        if (a.has(b)) {
          var n = a.get(b);
          if (n instanceof cb) {
            var p = qc(c);
            p.unshift(this.g);
            return n.g.apply(n, p);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if ("toString" === b) return a instanceof cb ? a.R : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, qc(c));
      }
      if (a instanceof fc && "toString" === b) return a.toString();
      throw Error("TypeError: Object has no '" + b + "' property.");
    },
    zc = function (a, b) {
      a = G(this, a);
      if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment.");
      var c = this.g;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = G(this, b);
      c.set(a, d);
      return d;
    },
    Ac = function (a) {
      var b = Aa(this.g),
        c = fb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof na) return c;
    },
    Bc = function () {
      return uc;
    },
    Cc = function (a) {
      for (var b = G(this, a), c = 0; c < b.length; c++) {
        var d = G(this, b[c]);
        if (d instanceof na) return d;
      }
    },
    Dc = function (a) {
      for (var b = this.g, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = G(this, arguments[c + 1]);
          za(b, d, e, !0);
        }
      }
    },
    Ec = function () {
      return vc;
    },
    Fc = function (a, b, c) {
      var d = new va();
      b = G(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.g.add(a, G(this, f));
    },
    Hc = function (a, b) {
      return G(this, a) / G(this, b);
    },
    Ic = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      var c = a instanceof fc,
        d = b instanceof fc;
      return c || d ? (c && d ? a.Za == b.Za : !1) : a == b;
    },
    Jc = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = G(this, arguments[c]);
      return b;
    };
  function Kc(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = fb(f, d);
      if (g instanceof na) {
        if ("break" === g.g) break;
        if ("return" === g.g) return g;
      }
    }
  }
  function Lc(a, b, c) {
    if ("string" === typeof b)
      return Kc(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof gb || b instanceof va || b instanceof cb) {
      var d = b.Eb(),
        e = d.length();
      return Kc(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  var Mc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Lc(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Nc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Lc(
        function (e) {
          var f = Aa(d);
          za(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Oc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Lc(
        function (e) {
          var f = Aa(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    },
    Qc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Pc(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Rc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Pc(
        function (e) {
          var f = Aa(d);
          za(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Sc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Pc(
        function (e) {
          var f = Aa(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    };
  function Pc(a, b, c) {
    if ("string" === typeof b)
      return Kc(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof va)
      return Kc(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    throw new TypeError("The value is not iterable.");
  }
  var Tc = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = G(this, a);
      if (!(f instanceof va))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.g;
      d = G(this, d);
      var h = Aa(g);
      for (e(g, h); eb(h, b); ) {
        var k = fb(h, d);
        if (k instanceof na) {
          if ("break" === k.g) break;
          if ("return" === k.g) return k;
        }
        var n = Aa(g);
        e(h, n);
        eb(n, c);
        h = n;
      }
    },
    Uc = function (a) {
      a = G(this, a);
      var b = this.g,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Vc = function (a, b) {
      var c;
      a = G(this, a);
      b = G(this, b);
      if (void 0 === a || null === a)
        throw Error("TypeError: cannot access property of " + a + ".");
      if (a instanceof gb || a instanceof va || a instanceof cb) c = a.get(b);
      else if ("string" === typeof a)
        "length" === b ? (c = a.length) : pa(b) && (c = a[b]);
      else if (a instanceof fc) return;
      return c;
    },
    Wc = function (a, b) {
      return G(this, a) > G(this, b);
    },
    Xc = function (a, b) {
      return G(this, a) >= G(this, b);
    },
    Yc = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      a instanceof fc && (a = a.Za);
      b instanceof fc && (b = b.Za);
      return a === b;
    },
    Zc = function (a, b) {
      return !Yc.call(this, a, b);
    },
    $c = function (a, b, c) {
      var d = [];
      G(this, a) ? (d = G(this, b)) : c && (d = G(this, c));
      var e = fb(this.g, d);
      if (e instanceof na) return e;
    },
    ad = function (a, b) {
      return G(this, a) < G(this, b);
    },
    bd = function (a, b) {
      return G(this, a) <= G(this, b);
    },
    cd = function (a, b) {
      return G(this, a) % G(this, b);
    },
    dd = function (a, b) {
      return G(this, a) * G(this, b);
    },
    hd = function (a) {
      return -G(this, a);
    },
    id = function (a) {
      return !G(this, a);
    },
    jd = function (a, b) {
      return !Ic.call(this, a, b);
    },
    kd = function () {
      return null;
    },
    ld = function (a, b) {
      return G(this, a) || G(this, b);
    },
    md = function (a, b) {
      var c = G(this, a);
      G(this, b);
      return c;
    },
    nd = function (a) {
      return G(this, a);
    },
    od = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    pd = function (a) {
      return new na("return", G(this, a));
    },
    qd = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't set property " + b + " of " + a + ".");
      (a instanceof cb || a instanceof va || a instanceof gb) && a.set(b, c);
      return c;
    },
    rd = function (a, b) {
      return G(this, a) - G(this, b);
    },
    sd = function (a, b, c) {
      a = G(this, a);
      var d = G(this, b),
        e = G(this, c);
      if (!Ea(d) || !Ea(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === G(this, d[h]))
          if (((f = G(this, e[h])), f instanceof na)) {
            var k = f.g;
            if ("break" === k) return;
            if ("return" === k || "continue" === k) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = G(this, e[e.length - 1])),
        f instanceof na && ("return" === f.g || "continue" === f.g))
      )
        return f;
    },
    td = function (a, b, c) {
      return G(this, a) ? G(this, b) : G(this, c);
    },
    ud = function (a) {
      a = G(this, a);
      return a instanceof cb ? "function" : typeof a;
    },
    vd = function (a) {
      for (var b = this.g, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    wd = function (a, b, c, d) {
      var e = G(this, d);
      if (G(this, c)) {
        var f = fb(this.g, e);
        if (f instanceof na) {
          if ("break" === f.g) return;
          if ("return" === f.g) return f;
        }
      }
      for (; G(this, a); ) {
        var g = fb(this.g, e);
        if (g instanceof na) {
          if ("break" === g.g) break;
          if ("return" === g.g) return g;
        }
        G(this, b);
      }
    },
    xd = function (a) {
      return ~Number(G(this, a));
    },
    yd = function (a, b) {
      return Number(G(this, a)) << Number(G(this, b));
    },
    zd = function (a, b) {
      return Number(G(this, a)) >> Number(G(this, b));
    },
    Ad = function (a, b) {
      return Number(G(this, a)) >>> Number(G(this, b));
    },
    Bd = function (a, b) {
      return Number(G(this, a)) & Number(G(this, b));
    },
    Cd = function (a, b) {
      return Number(G(this, a)) ^ Number(G(this, b));
    },
    Ed = function (a, b) {
      return Number(G(this, a)) | Number(G(this, b));
    };
  var Gd = function () {
    this.g = new ib();
    Fd(this);
  };
  Gd.prototype.execute = function (a) {
    return Hd(this.g.o(a));
  };
  var Id = function (a, b, c) {
      return Hd(a.g.C(b, c));
    },
    Fd = function (a) {
      var b = function (d, e) {
        kb(a.g, d, String(e));
      };
      b("control", 49);
      b("fn", 51);
      b("list", 7);
      b("map", 8);
      b("undefined", 44);
      var c = function (d, e) {
        jb(a.g, String(d), e);
      };
      c(0, wc);
      c(1, xc);
      c(2, yc);
      c(3, zc);
      c(53, Ac);
      c(4, Bc);
      c(5, Cc);
      c(52, Dc);
      c(6, Ec);
      c(9, Cc);
      c(50, Fc);
      c(10, Hc);
      c(12, Ic);
      c(13, Jc);
      c(47, Mc);
      c(54, Nc);
      c(55, Oc);
      c(63, Tc);
      c(64, Qc);
      c(65, Rc);
      c(66, Sc);
      c(15, Uc);
      c(16, Vc);
      c(17, Vc);
      c(18, Wc);
      c(19, Xc);
      c(20, Yc);
      c(21, Zc);
      c(22, $c);
      c(23, ad);
      c(24, bd);
      c(25, cd);
      c(26, dd);
      c(27, hd);
      c(28, id);
      c(29, jd);
      c(45, kd);
      c(30, ld);
      c(32, md);
      c(33, md);
      c(34, nd);
      c(35, nd);
      c(46, od);
      c(36, pd);
      c(43, qd);
      c(37, rd);
      c(38, sd);
      c(39, td);
      c(40, ud);
      c(41, vd);
      c(42, wd);
      c(58, xd);
      c(57, yd);
      c(60, zd);
      c(61, Ad);
      c(56, Bd);
      c(62, Cd);
      c(59, Ed);
    };
  function Hd(a) {
    if (
      a instanceof na ||
      a instanceof cb ||
      a instanceof va ||
      a instanceof gb ||
      a instanceof fc ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  var Jd = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Rh: a("consent"),
      ue: a("consent_always_fire"),
      Yf: a("convert_case_to"),
      Zf: a("convert_false_to"),
      ag: a("convert_null_to"),
      bg: a("convert_true_to"),
      cg: a("convert_undefined_to"),
      wk: a("debug_mode_metadata"),
      Db: a("function"),
      bf: a("instance_name"),
      Gi: a("live_only"),
      Hi: a("malware_disabled"),
      Ii: a("metadata"),
      Ni: a("original_activity_id"),
      Pk: a("original_vendor_template_id"),
      Ok: a("once_on_load"),
      Mi: a("once_per_event"),
      Kg: a("once_per_load"),
      Qk: a("priority_override"),
      Rk: a("respected_consent_types"),
      Qg: a("setup_tags"),
      Sg: a("tag_id"),
      Tg: a("teardown_tags"),
    };
  })();
  var ee;
  var fe = [],
    ge = [],
    he = [],
    ie = [],
    je = [],
    ke = {},
    le,
    me,
    ne,
    oe = function (a, b) {
      var c = {};
      c["function"] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    pe = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = ke[c],
        f = {},
        g;
      for (g in a)
        if (a.hasOwnProperty(g))
          if (0 === g.indexOf("vtp_"))
            e && d && d.dh && d.dh(a[g]),
              (f[void 0 !== e ? g : g.substr(4)] = a[g]);
          else if (g === Jd.ue.toString() && a[g]) {
          }
      e && d && d.bh && (f.vtp_gtmCachedValues = d.bh);
      if (b) {
        if (null == b.name) {
          var h;
          a: {
            var k = b.index;
            if (null == k) h = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = fe[k];
                  break;
                case 1:
                  n = ie[k];
                  break;
                default:
                  h = "";
                  break a;
              }
              var p = n && n[Jd.bf];
              h = p ? String(p) : "";
            }
          }
          b.name = h;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : ee(c, f, b);
    },
    re = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = qe(a[e], b, c));
      return d;
    },
    qe = function (a, b, c) {
      if (Ea(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(qe(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = fe[f];
            if (!g || b.Df(g)) return;
            c[f] = !0;
            var h = String(g[Jd.bf]);
            try {
              var k = re(g, b, c);
              k.vtp_gtmEventId = b.id;
              b.priorityId && (k.vtp_gtmPriorityId = b.priorityId);
              d = pe(k, { event: b, index: f, type: 2, name: h });
              ne && (d = ne.aj(d, k));
            } catch (w) {
              b.th && b.th(w, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[qe(a[n], b, c)] = qe(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = qe(a[q], b, c);
              me && (p = p || r === me.Od);
              d.push(r);
            }
            return me && p ? me.cj(d) : d.join("");
          case "escape":
            d = qe(a[1], b, c);
            if (me && Ea(a[1]) && "macro" === a[1][0] && me.yj(a))
              return me.Uj(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Kd[a[t]] && (d = Kd[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!ie[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { kh: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var x = te(v, b, c),
              y = !!a[4];
            return y || 2 !== x ? y !== (1 === x) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    te = function (a, b, c) {
      try {
        return le(re(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var ue = function (a, b, c) {
    var d;
    d = Error.call(this);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.o = a;
    this.g = c;
  };
  ka(ue, Error);
  function ve(a, b) {
    if (Ea(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) ve(a[c], b[c]);
    }
  }
  var we = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Pj = a;
    this.o = b;
    this.g = [];
  };
  ka(we, Error);
  var ye = function () {
    return function (a, b) {
      a instanceof we || (a = new we(a, xe));
      b && a.g.push(b);
      throw a;
    };
  };
  function xe(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) Da(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var Be = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = ze(a), f = 0; f < ge.length; f++) {
        var g = ge[f],
          h = Ae(g, e);
        if (h) {
          for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < ie.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Ae = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    ze = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = te(he[c], a));
        return b[c];
      };
    };
  var Ce = {
    aj: function (a, b) {
      b[Jd.Yf] &&
        "string" === typeof a &&
        (a = 1 == b[Jd.Yf] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Jd.ag) && null === a && (a = b[Jd.ag]);
      b.hasOwnProperty(Jd.cg) && void 0 === a && (a = b[Jd.cg]);
      b.hasOwnProperty(Jd.bg) && !0 === a && (a = b[Jd.bg]);
      b.hasOwnProperty(Jd.Zf) && !1 === a && (a = b[Jd.Zf]);
      return a;
    },
  };
  var De = function () {
    this.g = {};
  };
  function Ee(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e].call(void 0, b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new ue(c, d, g);
      }
  }
  function Fe(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.g[d],
          f = a.g.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Ee(e, b, d, g);
          Ee(f, b, d, g);
        }
      }
    };
  }
  var Je = function () {
      var a = data.permissions || {},
        b = Ge.J,
        c = this;
      this.o = new De();
      this.g = {};
      var d = {},
        e = Fe(this.o, b, function () {
          var f = arguments[0];
          return f && d[f]
            ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      Ka(a, function (f, g) {
        var h = {};
        Ka(g, function (k, n) {
          var p = He(k, n);
          h[k] = p.assert;
          d[k] || (d[k] = p.X);
        });
        c.g[f] = function (k, n) {
          var p = h[k];
          if (!p)
            throw Ie(
              k,
              {},
              "The requested permission " + k + " is not configured."
            );
          var q = Array.prototype.slice.call(arguments, 0);
          p.apply(void 0, q);
          e.apply(void 0, q);
        };
      });
    },
    Le = function (a) {
      return Ke.g[a] || function () {};
    };
  function He(a, b) {
    var c = oe(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Ie;
    try {
      return pe(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new ue(e, {}, "Permission " + e + " is unknown.");
        },
        X: function () {
          for (var e = {}, f = 0; f < arguments.length; ++f)
            e["arg" + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }
  function Ie(a, b, c) {
    return new ue(a, b, c);
  }
  var Me = !1;
  var Ne = {};
  Ne.vk = Na("");
  Ne.ej = Na("");
  var Oe = Me,
    Pe = Ne.ej,
    Qe = Ne.vk;
  var Re = function (a, b) {
    var c = String(a);
    return c;
  };
  var We = function (a) {
      var b = {},
        c = 0;
      Ka(a, function (e, f) {
        if (void 0 !== f)
          if (((f = Re(f, 100)), Se.hasOwnProperty(e))) b[Se[e]] = Te(f);
          else if (Ue.hasOwnProperty(e)) {
            var g = Ue[e],
              h = Te(f);
            b.hasOwnProperty(g) || (b[g] = h);
          } else if ("category" === e)
            for (var k = Te(f).split("/", 5), n = 0; n < k.length; n++) {
              var p = Ve[n],
                q = k[n];
              b.hasOwnProperty(p) || (b[p] = q);
            }
          else
            10 > c && ((b["k" + c] = Te(Re(e, 40))), (b["v" + c] = Te(f)), c++);
      });
      var d = [];
      Ka(b, function (e, f) {
        d.push("" + e + f);
      });
      return d.join("~");
    },
    Te = function (a) {
      return ("" + a).replace(/~/g, function () {
        return "~~";
      });
    },
    Se = {
      item_id: "id",
      item_name: "nm",
      item_brand: "br",
      item_category: "ca",
      item_category2: "c2",
      item_category3: "c3",
      item_category4: "c4",
      item_category5: "c5",
      item_variant: "va",
      price: "pr",
      quantity: "qt",
      coupon: "cp",
      item_list_name: "ln",
      index: "lp",
      item_list_id: "li",
      discount: "ds",
      affiliation: "af",
      promotion_id: "pi",
      promotion_name: "pn",
      creative_name: "cn",
      creative_slot: "cs",
      location_id: "lo",
    },
    Ue = {
      id: "id",
      name: "nm",
      brand: "br",
      variant: "va",
      list_name: "ln",
      list_position: "lp",
      list: "ln",
      position: "lp",
      creative: "cn",
    },
    Ve = ["ca", "c2", "c3", "c4", "c5"];
  var Xe = function (a) {
      var b = [];
      Ka(a, function (c, d) {
        null != d &&
          b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)));
      });
      return b.join("&");
    },
    Ye = function (a, b, c, d) {
      this.Da = a.Da;
      this.Nb = a.Nb;
      this.Z = a.Z;
      this.g = b;
      this.C = c;
      this.B = Xe(a.Da);
      this.o = Xe(a.Z);
      this.I = this.o.length;
      if (d && 16384 < this.I) throw Error("EVENT_TOO_LARGE");
    };
  var Ze = function () {
    this.events = [];
    this.g = this.Da = "";
    this.B = 0;
    this.o = !1;
  };
  Ze.prototype.add = function (a) {
    return this.C(a)
      ? (this.events.push(a),
        (this.Da = a.B),
        (this.g = a.g),
        (this.B += a.I),
        (this.o = a.C),
        !0)
      : !1;
  };
  Ze.prototype.C = function (a) {
    var b = 20 > this.events.length && 16384 > a.I + this.B,
      c = this.Da === a.B && this.g === a.g && this.o === a.C;
    return 0 == this.events.length || (b && c);
  };

  var $e = function (a, b) {
      Ka(a, function (c, d) {
        null != d &&
          b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
      });
    },
    af = function (a, b) {
      var c = [];
      a.B && c.push(a.B);
      b && c.push("_s=" + b);
      $e(a.Nb, c);
      var d = !1;
      a.o && (c.push(a.o), (d = !0));
      var e = c.join("&"),
        f = "",
        g = e.length + a.g.length + 1;
      d && 2048 < g && ((f = c.pop()), (e = c.join("&")));
      return { Mf: e, body: f };
    },
    bf = function (a, b) {
      var c = a.events;
      if (1 == c.length) return af(c[0], b);
      var d = [];
      a.Da && d.push(a.Da);
      for (var e = {}, f = 0; f < c.length; f++)
        Ka(c[f].Nb, function (t, u) {
          null != u &&
            ((e[t] = e[t] || {}), (e[t][String(u)] = e[t][String(u)] + 1 || 1));
        });
      var g = {};
      Ka(e, function (t, u) {
        var v,
          x = -1,
          y = 0;
        Ka(u, function (w, A) {
          y += A;
          var B = (w.length + t.length + 2) * (A - 1);
          B > x && ((v = w), (x = B));
        });
        y == c.length && (g[t] = v);
      });
      $e(g, d);
      b && d.push("_s=" + b);
      for (
        var h = d.join("&"), k = [], n = {}, p = 0;
        p < c.length;
        n = { rd: n.rd }, p++
      ) {
        var q = [];
        n.rd = {};
        Ka(
          c[p].Nb,
          (function (t) {
            return function (u, v) {
              g[u] != "" + v && (t.rd[u] = v);
            };
          })(n)
        );
        c[p].o && q.push(c[p].o);
        $e(n.rd, q);
        k.push(q.join("&"));
      }
      var r = k.join("\r\n");
      return { Mf: h, body: r };
    };
  var mf = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
    nf = { Fn: "function", DustMap: "Object", List: "Array" },
    L = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = mf.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          k = c[d];
        if (null == k) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof k;
          k instanceof cb
            ? (n = "Fn")
            : k instanceof va
            ? (n = "List")
            : k instanceof gb
            ? (n = "DustMap")
            : k instanceof fc && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (nf[n] || n) +
                ", which does not match required type " +
                (nf[h] || h) +
                "."
            );
        }
      }
    };
  function of(a) {
    return "" + a;
  }
  function pf(a, b) {
    var c = [];
    return c;
  }
  var qf = function (a, b) {
      var c = new cb(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = G(this, d[e]);
        return b.apply(this, d);
      });
      c.Fb();
      return c;
    },
    rf = function (a, b) {
      var c = new gb(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          Ca(e)
            ? c.set(d, qf(a + "_" + d, e))
            : (Da(e) || m(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.Fb();
      return c;
    };
  var sf = function (a, b) {
    L(H(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new gb();
    return (d = rf("AssertApiSubject", c));
  };
  var tf = function (a, b) {
    L(H(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof hc)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new gb();
    return (d = rf("AssertThatSubject", c));
  };
  function uf(a) {
    return function () {
      for (var b = [], c = this.g, d = 0; d < arguments.length; ++d)
        b.push(oc(arguments[d], c));
      return nc(a.apply(null, b));
    };
  }
  var wf = function () {
    for (var a = Math, b = vf, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = uf(a[e].bind(a)));
    }
    return c;
  };
  var xf = function (a) {
    var b;
    return b;
  };
  var yf = function (a) {
    var b;
    return b;
  };
  var zf = function (a) {
    return encodeURI(a);
  };
  var Af = function (a) {
    return encodeURIComponent(a);
  };
  var Bf = function (a) {
    L(H(this), ["message:?string"], arguments);
  };
  var Cf = function (a, b) {
    L(H(this), ["min:!number", "max:!number"], arguments);
    return Ga(a, b);
  };
  var M = function (a, b, c) {
    var d = a.g.g;
    if (!d) throw Error("Missing program state.");
    d.Vi.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var Hf = function () {
    M(this, "read_container_data");
    var a = new gb();
    a.set("containerId", "G-LTF3L1GDT3");
    a.set("version", "1");
    a.set("environmentName", "");
    a.set("debugMode", Oe);
    a.set("previewMode", Qe);
    a.set("environmentMode", Pe);
    a.Fb();
    return a;
  };
  var If = {};
  If.enable1pScripts = !0;
  If.enableGlobalEventDeveloperIds = !1;
  If.enableGlobalEventDeveloperIds = !0;
  If.enableGa4OnoRemarketing = !1;
  If.omitAuidIfWbraidPresent = !1;
  If.reconcileCampaignFields = !1;
  If.reconcileCampaignFields = !0;
  If.enableEmFormCcd = !1;
  If.enableEmFormCcd = !0;
  If.enableEmFormCcdPart2 = !1;
  If.enableLandingPageDeduplication = !0;
  If.enableFloodlightPrerenderingBypass = !1;
  If.analyticsPrivateParamsExcluded = !1;
  If.ipOverrideExperiment = !1;
  If.ipOverrideExperiment = !0;
  If.enableAdsConsentedConversionsOnly = !1;
  If.enableAdsConsentedConversionsOnly = !0;
  If.enableFlConsentedConversionsOnly = !1;
  If.enableFlConsentedConversionsOnly = !0;
  If.enableAdsHistoryChangeEvents = !1;
  If.enableAdsHistoryChangeEvents = !0;
  If.enableEValue = !1;
  If.requireGtagUserDataTos = !0;
  If.sendBeaconEnableExperimentPercentage = Number("0") || 0;
  function Jf() {
    return nc(If);
  }
  var Kf = function () {
    return new Date().getTime();
  };
  var Lf = function (a) {
    if (null === a) return "null";
    if (a instanceof va) return "array";
    if (a instanceof cb) return "function";
    if (a instanceof fc) {
      a = a.Za;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var Mf = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Oe || Qe) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return nc(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(oc(c));
      }),
    };
  };
  var Nf = function (a) {
    return Ma(oc(a, this.g));
  };
  var Of = function (a) {
    return Number(oc(a, this.g));
  };
  var Pf = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var Qf = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var vf = "floor ceil round max min abs pow sqrt".split(" ");
  var Rf = function () {
      var a = {};
      return {
        oj: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        nk: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    Sf = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return cb.prototype.g.apply(a, c);
      };
    },
    Tf = function (a, b) {
      L(H(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var Uf = {};
  Uf.keys = function (a) {
    return new va();
  };
  Uf.values = function (a) {
    return new va();
  };
  Uf.entries = function (a) {
    return new va();
  };
  Uf.freeze = function (a) {
    return a;
  };
  Uf.delete = function (a, b) {
    return !1;
  };
  var Wf = function () {
    this.g = {};
    this.o = {};
  };
  Wf.prototype.get = function (a, b) {
    var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
    return c;
  };
  Wf.prototype.add = function (a, b, c) {
    if (this.g.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.o.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.g[a] = c ? void 0 : Ca(b) ? qf(a, b) : rf(a, b);
  };
  var Yf = function (a, b, c) {
    if (a.o.hasOwnProperty(b))
      throw (
        "Attempting to add a private function which already exists: " + b + "."
      );
    if (a.g.hasOwnProperty(b))
      throw (
        "Attempting to add a private function with an existing API name: " +
        b +
        "."
      );
    a.o[b] = Ca(c) ? qf(b, c) : rf(b, c);
  };
  function Xf(a, b) {
    var c = void 0;
    return c;
  }
  function Zf() {
    var a = {};
    return a;
  }
  var ag = function (a) {
      return $f ? I.querySelectorAll(a) : null;
    },
    bg = function (a, b) {
      if (!$f) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!I.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    cg = !1;
  if (I.querySelectorAll)
    try {
      var dg = I.querySelectorAll(":root");
      dg && 1 == dg.length && dg[0] == I.documentElement && (cg = !0);
    } catch (a) {}
  var $f = cg;
  var eg = {},
    fg = function (a, b) {
      eg[a] = eg[a] || [];
      eg[a][b] = !0;
    },
    gg = function (a) {
      for (var b = [], c = eg[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[
          e
        ] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
          b[e] || 0
        );
      return b.join("");
    },
    hg = function () {
      for (var a = [], b = eg.GA4_EVENT || [], c = 0; c < b.length; c++)
        b[c] && a.push(c);
      return 0 < a.length ? a : void 0;
    };
  var ig = function (a) {
    fg("GTM", a);
  };
  var jg = function (a) {
      return null == a ? "" : m(a) ? Pa(String(a)) : "e0";
    },
    lg = function (a) {
      return a.replace(kg, "");
    },
    ng = function (a) {
      return mg(a.replace(/\s/g, ""));
    },
    mg = function (a) {
      return Pa(a.replace(og, "").toLowerCase());
    },
    qg = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return pg.test(a) ? a : "e0";
    },
    sg = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (rg.test(c)) return c;
      }
      return "e0";
    },
    vg = function (a, b) {
      window.Promise || b([]);
      Promise.all(
        a.map(function (c) {
          return c.value && -1 !== tg.indexOf(c.name)
            ? ug(c.value).then(function (d) {
                c.value = d;
              })
            : Promise.resolve();
        })
      )
        .then(function () {
          b(a);
        })
        .catch(function () {
          b([]);
        });
    },
    ug = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (z.crypto && z.crypto.subtle)
        try {
          var b = wg(a);
          return z.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("");
              return z
                .btoa(d)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      else return Promise.resolve("e1");
    },
    wg = function (a) {
      var b;
      if (z.TextEncoder) b = new z.TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    og = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    rg = /^\S+@\S+\.\S+$/,
    pg = /^\+\d{10,15}$/,
    kg = /[.~]/g,
    xg = {},
    yg =
      ((xg.email = "em"),
      (xg.phone_number = "pn"),
      (xg.first_name = "fn"),
      (xg.last_name = "ln"),
      (xg.street = "sa"),
      (xg.city = "ct"),
      (xg.region = "rg"),
      (xg.country = "co"),
      (xg.postal_code = "pc"),
      (xg.error_code = "ec"),
      xg),
    zg = function (a, b) {
      function c(n, p, q) {
        var r = n[p];
        Ea(r) || (r = [r]);
        for (var t = 0; t < r.length; ++t) {
          var u = jg(r[t]);
          "" !== u && f.push({ name: p, value: q(u), index: void 0 });
        }
      }
      function d(n, p, q, r) {
        var t = jg(n[p]);
        "" !== t && f.push({ name: p, value: q(t), index: r });
      }
      function e(n) {
        return function (p) {
          ig(64);
          return n(p);
        };
      }
      var f = [];
      if ("https:" === z.location.protocol) {
        c(a, "email", sg);
        c(a, "phone_number", qg);
        c(a, "first_name", e(ng));
        c(a, "last_name", e(ng));
        var g = a.home_address || {};
        c(g, "street", e(mg));
        c(g, "city", e(mg));
        c(g, "postal_code", e(lg));
        c(g, "region", e(mg));
        c(g, "country", e(lg));
        var h = a.address || {};
        Ea(h) || (h = [h]);
        for (var k = 0; k < h.length; k++)
          d(h[k], "first_name", ng, k),
            d(h[k], "last_name", ng, k),
            d(h[k], "street", mg, k),
            d(h[k], "city", mg, k),
            d(h[k], "postal_code", lg, k),
            d(h[k], "region", mg, k),
            d(h[k], "country", lg, k);
        vg(f, b);
      } else f.push({ name: "error_code", value: "e3", index: void 0 }), b(f);
    },
    Ag = function (a, b) {
      zg(a, function (c) {
        for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name,
            h = c[f].value,
            k = c[f].index,
            n = yg[g];
          n &&
            h &&
            (-1 === tg.indexOf(g) ||
              /^e\d+$/.test(h) ||
              /^[0-9A-Za-z_-]{43}$/.test(h)) &&
            (void 0 !== k && (n += k), d.push(n + "." + h), e++);
        }
        1 === c.length && "error_code" === c[0].name && (e = 0);
        b(encodeURIComponent(d.join("~")), e);
      });
    },
    Bg = function (a) {
      if (z.Promise)
        try {
          return new Promise(function (b) {
            Ag(a, function (c, d) {
              b({ ke: c, Uk: d });
            });
          });
        } catch (b) {}
    },
    tg = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var P = {
    Fg: "_is_passthrough_cid",
    Eg: "_is_linker_valid",
    Yb: "event_callback",
    Ed: "event_timeout",
    Ma: "gtag.config",
    Ua: "gtag.get",
    Fa: "purchase",
    Vb: "refund",
    wb: "begin_checkout",
    Sb: "add_to_cart",
    Tb: "remove_from_cart",
    ai: "view_cart",
    eg: "add_to_wishlist",
    Ga: "view_item",
    Ub: "view_promotion",
    ze: "select_promotion",
    ye: "select_item",
    xb: "view_item_list",
    dg: "add_payment_info",
    Zh: "add_shipping_info",
    Ya: "value_key",
    kb: "value_callback",
    ba: "allow_ad_personalization_signals",
    Ic: "restricted_data_processing",
    Bc: "allow_google_signals",
    Ia: "cookie_expires",
    Xb: "cookie_update",
    Jc: "session_duration",
    Ld: "session_engaged_time",
    Cd: "engagement_time_msec",
    Qa: "user_properties",
    aa: "transport_url",
    na: "ads_data_redaction",
    za: "user_data",
    Fc: "first_party_collection",
    H: "ad_storage",
    T: "analytics_storage",
    ve: "region",
    Xf: "wait_for_update",
    va: "conversion_linker",
    Na: "conversion_cookie_prefix",
    qa: "value",
    xa: "currency",
    zg: "trip_type",
    da: "items",
    pg: "passengers",
    Be: "allow_custom_scripts",
    Cb: "session_id",
    vg: "quantity",
    pb: "transaction_id",
    Ab: "language",
    Bd: "country",
    ud: "allow_enhanced_conversions",
    Ge: "aw_merchant_id",
    Ee: "aw_feed_country",
    Fe: "aw_feed_language",
    De: "discount",
    ca: "developer_id",
    mg: "global_developer_id_string",
    kg: "event_developer_id_string",
    Md: "delivery_postal_code",
    Me: "estimated_delivery_date",
    Ke: "shipping",
    Qe: "new_customer",
    He: "customer_lifetime_value",
    Le: "enhanced_conversions",
    zc: "page_view",
    ya: "linker",
    U: "domains",
    ac: "decorate_forms",
    jg: "enhanced_conversions_automatic_settings",
    hi: "auto_detection_enabled",
    Oe: "ga_temp_client_id",
    Ac: "user_engagement",
    Uh: "app_remove",
    Vh: "app_store_refund",
    Wh: "app_store_subscription_cancel",
    Xh: "app_store_subscription_convert",
    Yh: "app_store_subscription_renew",
    bi: "first_open",
    ci: "first_visit",
    di: "in_app_purchase",
    ei: "session_start",
    fi: "allow_display_features",
    Cc: "campaign",
    vd: "campaign_content",
    wd: "campaign_id",
    xd: "campaign_medium",
    yd: "campaign_name",
    zd: "campaign_source",
    Ad: "campaign_term",
    sa: "client_id",
    wa: "cookie_domain",
    Wb: "cookie_name",
    ib: "cookie_path",
    Va: "cookie_flags",
    Dc: "custom_map",
    Hd: "groups",
    og: "non_interaction",
    nb: "page_location",
    Re: "page_path",
    ob: "page_referrer",
    Jd: "page_title",
    Ja: "send_page_view",
    Bb: "send_to",
    Kc: "session_engaged",
    Ec: "euid_logged_in_state",
    Lc: "session_number",
    Ai: "tracking_id",
    qb: "url_passthrough",
    Zb: "accept_incoming",
    Hc: "url_position",
    sg: "phone_conversion_number",
    qg: "phone_conversion_callback",
    rg: "phone_conversion_css_class",
    ug: "phone_conversion_options",
    vi: "phone_conversion_ids",
    ui: "phone_conversion_country_code",
    yb: "aw_remarketing",
    Ce: "aw_remarketing_only",
    Ae: "gclid",
    gi: "auid",
    mi: "affiliation",
    ig: "tax",
    Je: "list_name",
    hg: "checkout_step",
    gg: "checkout_option",
    ni: "coupon",
    oi: "promotions",
    Pa: "user_id",
    yi: "retoken",
    Oa: "cookie_prefix",
    fg: "disable_merchant_reported_purchases",
    li: "dc_natural_search",
    ki: "dc_custom_params",
    ng: "method",
    zi: "search_term",
    ji: "content_type",
    si: "optimize_id",
    ri: "experiments",
    lb: "google_signals",
  };
  P.Gd = "google_tld";
  P.Nd = "update";
  P.Ne = "firebase_id";
  P.Gc = "ga_restrict_domain";
  P.Dd = "event_settings";
  P.Ie = "dynamic_event_settings";
  P.bc = "user_data_settings";
  P.xg = "screen_name";
  P.Te = "screen_resolution";
  P.zb = "_x_19";
  P.jb = "enhanced_client_id";
  P.Fd = "_x_20";
  P.Pe = "internal_traffic_results";
  P.Ue = "traffic_type";
  P.Kd = "referral_exclusion_definition";
  P.Id = "ignore_referrer";
  P.ii = "content_group";
  P.Ha = "allow_interest_groups";
  P.Ak = "debug_mode";
  (P.Se = "redact_device_info"), (P.lg = "geo_granularity");
  var Cg = {};
  P.Bg = Object.freeze(
    ((Cg[P.ba] = 1),
    (Cg[P.ud] = 1),
    (Cg[P.Bc] = 1),
    (Cg[P.da] = 1),
    (Cg[P.wa] = 1),
    (Cg[P.Ia] = 1),
    (Cg[P.Va] = 1),
    (Cg[P.Wb] = 1),
    (Cg[P.ib] = 1),
    (Cg[P.Oa] = 1),
    (Cg[P.Xb] = 1),
    (Cg[P.Dc] = 1),
    (Cg[P.ca] = 1),
    (Cg[P.Ie] = 1),
    (Cg[P.Yb] = 1),
    (Cg[P.Dd] = 1),
    (Cg[P.Ed] = 1),
    (Cg[P.Fc] = 1),
    (Cg[P.Gc] = 1),
    (Cg[P.lb] = 1),
    (Cg[P.Gd] = 1),
    (Cg[P.Hd] = 1),
    (Cg[P.Pe] = 1),
    (Cg[P.ya] = 1),
    (Cg[P.Kd] = 1),
    (Cg[P.Ic] = 1),
    (Cg[P.Ja] = 1),
    (Cg[P.Bb] = 1),
    (Cg[P.Jc] = 1),
    (Cg[P.Ld] = 1),
    (Cg[P.Md] = 1),
    (Cg[P.aa] = 1),
    (Cg[P.Nd] = 1),
    (Cg[P.bc] = 1),
    (Cg[P.Qa] = 1),
    Cg)
  );
  P.Ag = Object.freeze([P.nb, P.ob, P.Jd, P.Ab, P.xg, P.Pa, P.Ne, P.ii]);
  var Dg = {};
  P.Ci = Object.freeze(
    ((Dg[P.Uh] = 1),
    (Dg[P.Vh] = 1),
    (Dg[P.Wh] = 1),
    (Dg[P.Xh] = 1),
    (Dg[P.Yh] = 1),
    (Dg[P.bi] = 1),
    (Dg[P.ci] = 1),
    (Dg[P.di] = 1),
    (Dg[P.ei] = 1),
    (Dg[P.Ac] = 1),
    Dg)
  );
  var Eg = {};
  P.Cg = Object.freeze(
    ((Eg[P.dg] = 1),
    (Eg[P.Zh] = 1),
    (Eg[P.Sb] = 1),
    (Eg[P.Tb] = 1),
    (Eg[P.ai] = 1),
    (Eg[P.wb] = 1),
    (Eg[P.ye] = 1),
    (Eg[P.xb] = 1),
    (Eg[P.ze] = 1),
    (Eg[P.Ub] = 1),
    (Eg[P.Fa] = 1),
    (Eg[P.Vb] = 1),
    (Eg[P.Ga] = 1),
    (Eg[P.eg] = 1),
    Eg)
  );
  P.We = Object.freeze([P.ba, P.Bc, P.Xb]);
  P.Ki = Object.freeze([].concat(P.We));
  P.Xe = Object.freeze([P.Ia, P.Ed, P.Jc, P.Ld, P.Cd]);
  P.Li = Object.freeze([].concat(P.Xe));
  var Fg = {};
  P.we = ((Fg[P.H] = "1"), (Fg[P.T] = "2"), Fg);
  var Hg = {},
    S = (z.google_tag_manager = z.google_tag_manager || {}),
    Ig = Math.random();
  Hg.Sd = "6m0";
  Hg.fa = "dataLayer";
  Hg.Th =
    "ChEI8KrllQYQm9LtnoyMvZ67ARIlAOjNVMpT25EbHj32o6r40gNwwIn21lrZ63CTi2OOY3p/cPx3BBoCPao\x3d";
  var Jg = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Kg = { __paused: !0, __tg: !0 },
    Lg;
  for (Lg in Jg) Jg.hasOwnProperty(Lg) && (Kg[Lg] = !0);
  Hg.yc = "www.googletagmanager.com";
  var Mg,
    Ng = Hg.yc + "/gtm.js";
  Ng = Hg.yc + "/gtag/js";
  Mg = Ng;
  var Og = Na(""),
    Pg = Na(""),
    Qg = null,
    Rg = null,
    Sg = {},
    Tg = {},
    Ug = function () {
      var a = S.sequence || 1;
      S.sequence = a + 1;
      return a;
    };
  Hg.Sh = "true";
  var Vg = "";
  Hg.Td = Vg;
  var Wg = new Ha(),
    Xg = {},
    Yg = {},
    ah = {
      name: Hg.fa,
      set: function (a, b) {
        mc(Za(a, b), Xg);
        Zg();
      },
      get: function (a) {
        return $g(a, 2);
      },
      reset: function () {
        Wg = new Ha();
        Xg = {};
        Zg();
      },
    },
    $g = function (a, b) {
      return 2 != b ? Wg.get(a) : bh(a);
    },
    bh = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Xg, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    ch = function (a, b) {
      Yg.hasOwnProperty(a) || (Wg.set(a, b), mc(Za(a, b), Xg), Zg());
    },
    dh = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = $g(c, 1);
        if (Ea(d) || lc(d)) d = mc(d);
        Yg[c] = d;
      }
    },
    Zg = function (a) {
      Ka(Yg, function (b, c) {
        Wg.set(b, c);
        mc(Za(b), Xg);
        mc(Za(b, c), Xg);
        a && delete Yg[b];
      });
    },
    eh = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? bh(a) : Wg.get(a);
      "array" === jc(d) || "object" === jc(d) ? (c = mc(d)) : (c = d);
      return c;
    };
  var fh,
    gh = !1;
  function hh() {
    gh = !0;
    fh = fh || {};
  }
  var ih = function (a) {
    gh || hh();
    return fh[a];
  };
  var jh = function (a) {
    if (I.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
      return !0;
    var c = z.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var h = g.indexOf("opacity(");
        0 <= h &&
          ((g = g.substring(h + 8, g.indexOf(")", h))),
          "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
          (f = Math.min(g, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = z.getComputedStyle(d, null));
    }
    return !1;
  };
  var kh = function () {
      var a = I.body,
        b = I.documentElement || (a && a.parentElement),
        c,
        d;
      if (I.compatMode && "BackCompat" !== I.compatMode)
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        ig(7);
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    },
    lh = function (a) {
      var b = kh(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1
              ))
        : 0;
    };
  var sh = /:[0-9]+$/,
    th = function (a, b, c, d) {
      for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
        var h = f[g].split("=");
        if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
          var k = h.slice(1).join("=");
          if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
          e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "));
        }
      }
      return c ? e : void 0;
    },
    wh = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = uh(a.protocol) || uh(z.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : z.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || z.location.hostname)
            .replace(sh, "")
            .toLowerCase());
      return vh(a, b, c, d, e);
    },
    vh = function (a, b, c, d, e) {
      var f,
        g = uh(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = xh(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(sh, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || fg("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var k = f.split("/");
          0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
          f = k.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = th(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    uh = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    xh = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    yh = function (a) {
      var b = I.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || fg("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(sh, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    zh = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
          " "
        ),
        e = yh(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var k = "" + f + g + h;
      "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
      return k;
    };
  var Ah = {};
  var Lh = function (a, b, c) {
      if (a) {
        var d = a.element,
          e = { Ob: a.Ob, tagName: d.tagName, type: 1 };
        b && (e.querySelector = Bh(d));
        c && (e.isVisible = !jh(d));
        return e;
      }
    },
    Oh = function (a) {
      if (0 != a.length) {
        var b;
        b = Mh(a, function (c) {
          return !Nh.test(c.Ob);
        });
        b = Mh(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = Mh(b, function (c) {
          return !jh(c.element);
        });
        return b[0];
      }
    },
    Mh = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    Bh = function (a) {
      var b;
      if (a === I.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = Bh(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    Ph = !0,
    Qh = !1;
  Ah.Ph = "true";
  var Rh = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
    Sh = new RegExp(/@(gmail|googlemail)\./i),
    Nh = new RegExp(/support|noreply/i),
    Th = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT".split(" "),
    Uh = ["BR"],
    Vh = {},
    Wh = function (a) {
      a = a || { kc: !0, mc: !0 };
      a.tb = a.tb || { email: !0, phone: !0, Zg: !0 };
      var b,
        c = a,
        d = !!c.kc + "." + !!c.mc;
      c && c.Sc && c.Sc.length && (d += "." + c.Sc.join("."));
      c && c.tb && (d += "." + c.tb.email + "." + c.tb.phone + "." + c.tb.Zg);
      b = d;
      var e = Vh[b];
      if (e && 200 > Ra() - e.timestamp) return e.result;
      var f;
      var g = [],
        h = I.body;
      if (h) {
        for (
          var k = h.querySelectorAll("*"), n = 0;
          n < k.length && 1e4 > n;
          n++
        ) {
          var p = k[n];
          if (
            !(0 <= Th.indexOf(p.tagName.toUpperCase())) &&
            p.children instanceof HTMLCollection
          ) {
            for (var q = !1, r = 0; r < p.childElementCount && 1e4 > r; r++)
              if (!(0 <= Uh.indexOf(p.children[r].tagName.toUpperCase()))) {
                q = !0;
                break;
              }
            q || g.push(p);
          }
        }
        f = { elements: g, status: 1e4 < k.length ? "2" : "1" };
      } else f = { elements: g, status: "4" };
      var t = f,
        u = t.status,
        v = [],
        x;
      if (a.tb && a.tb.email) {
        for (var y = t.elements, w = [], A = 0; A < y.length; A++) {
          var B = y[A],
            C = B.textContent;
          "INPUT" === B.tagName.toUpperCase() && B.value && (C = B.value);
          if (C) {
            var E = C.match(Rh);
            if (E) {
              var F = E[0],
                D;
              if (z.location) {
                var O = vh(z.location, "host", !0);
                D = 0 <= F.toLowerCase().indexOf(O);
              } else D = !1;
              D || w.push({ element: B, Ob: F });
            }
          }
        }
        var N = a && a.Sc;
        if (N && 0 !== N.length) {
          for (var R = [], Z = 0; Z < w.length; Z++) {
            for (var Q = !0, K = 0; K < N.length; K++) {
              var Y = N[K];
              if (Y && bg(w[Z].element, Y)) {
                Q = !1;
                break;
              }
            }
            Q && R.push(w[Z]);
          }
          v = R;
        } else v = w;
        x = Oh(v);
        10 < w.length && (u = "3");
      }
      var ba = [];
      !a.hk && x && (v = [x]);
      for (var T = 0; T < v.length; T++) ba.push(Lh(v[T], a.kc, a.mc));
      var oa = { elements: ba.slice(0, 10), Tj: Lh(x, a.kc, a.mc), status: u };
      Vh[b] = { timestamp: Ra(), result: oa };
      return oa;
    },
    Xh = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.Ob.length + ":" + Sh.test(a.Ob)
      );
    };
  var Yh = function (a, b, c) {
      if (c) {
        var d = c.selector_type,
          e = String(c.value),
          f;
        if ("js_variable" === d) {
          e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
          for (var g = e.split(","), h = 0; h < g.length; h++) {
            var k = g[h].trim();
            if (k) {
              if (0 === k.indexOf("dataLayer.")) f = $g(k.substring(10));
              else {
                var n = k.split(".");
                f = z[n.shift()];
                for (var p = 0; p < n.length; p++) f = f && f[n[p]];
              }
              if (void 0 !== f) break;
            }
          }
        } else if ("css_selector" === d && $f) {
          var q = ag(e);
          if (q && 0 < q.length) {
            f = [];
            for (
              var r = 0;
              r < q.length &&
              r < ("email" === b || "phone_number" === b ? 5 : 1);
              r++
            )
              f.push(Tb(q[r]) || Pa(q[r].value));
            f = 1 === f.length ? f[0] : f;
          }
        }
        f && (a[b] = f);
      }
    },
    Zh = function (a) {
      if (a) {
        var b = {};
        Yh(b, "email", a.email);
        Yh(b, "phone_number", a.phone);
        b.address = [];
        for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
          var e = {};
          Yh(e, "first_name", c[d].first_name);
          Yh(e, "last_name", c[d].last_name);
          Yh(e, "street", c[d].street);
          Yh(e, "city", c[d].city);
          Yh(e, "region", c[d].region);
          Yh(e, "country", c[d].country);
          Yh(e, "postal_code", c[d].postal_code);
          b.address.push(e);
        }
        return b;
      }
    },
    $h = function (a) {
      if (a)
        switch (a.mode) {
          case "selectors":
            return Zh(a.selectors);
          case "auto_detect":
            var b;
            var c = a.auto_detect;
            if (c) {
              var d = Wh({
                  kc: !1,
                  mc: !1,
                  Sc: c.exclude_element_selectors,
                  tb: { email: !!c.email, phone: !!c.phone, Zg: !!c.address },
                }).elements,
                e = {};
              if (0 < d.length)
                for (var f = 0; f < d.length; f++) {
                  var g = d[f];
                  if (1 === g.type) {
                    e.email = g.Ob;
                    break;
                  }
                }
              b = e;
            } else b = void 0;
            return b;
        }
    },
    ai = function (a, b) {
      switch (a.enhanced_conversions_mode) {
        case "manual":
          if (b && lc(b)) return b;
          var c = a.enhanced_conversions_manual_var;
          return void 0 !== c ? c : z.enhanced_conversion_data;
        case "automatic":
          return Zh(a[P.jg]);
      }
    };
  var gi = {},
    hi = function (a, b) {
      if (z._gtmexpgrp && z._gtmexpgrp.hasOwnProperty(a))
        return z._gtmexpgrp[a];
      void 0 === gi[a] && (gi[a] = Math.floor(Math.random() * b));
      return gi[a];
    };
  var ji = { qf: "IN", Ah: "IN-WB" };
  var ki = new (function (a, b) {
    this.g = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var mi = function () {
    var a = li,
      b = "Bf";
    if (a.Bf && a.hasOwnProperty(b)) return a.Bf;
    var c = new a();
    a.Bf = c;
    a.hasOwnProperty(b);
    return c;
  };
  var li = function () {
    var a = {};
    this.g = function () {
      var b = ki.g,
        c = ki.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.o = function () {
      a[ki.g] = !0;
    };
  };
  var ni = [];
  function oi() {
    var a = Gb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: pi,
        update: qi,
        addListener: ri,
        notifyListeners: si,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function pi(a, b, c, d, e, f) {
    var g = oi();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var h = g.entries,
        k = h[a] || {},
        n = k.region,
        p = c && m(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === k.update),
          r = {
            region: p,
            initial: "granted" === b,
            update: k.update,
            quiet: q,
          };
        if ("" !== d || !1 !== k.initial) h[a] = r;
        q &&
          z.setTimeout(function () {
            h[a] === r &&
              r.quiet &&
              ((r.quiet = !1), ti(a), si(), fg("TAGGING", 2));
          }, f);
      }
    }
  }
  function qi(a, b) {
    var c = oi();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = ui(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = ui(c, a);
      f.quiet ? ((f.quiet = !1), ti(a)) : g !== d && ti(a);
    }
  }
  function ri(a, b) {
    ni.push({ pf: a, jj: b });
  }
  function ti(a) {
    for (var b = 0; b < ni.length; ++b) {
      var c = ni[b];
      Ea(c.pf) && -1 !== c.pf.indexOf(a) && (c.xh = !0);
    }
  }
  function si(a, b) {
    for (var c = 0; c < ni.length; ++c) {
      var d = ni[c];
      if (d.xh) {
        d.xh = !1;
        try {
          d.jj({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function ui(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var vi = function (a) {
      var b = oi();
      b.accessedAny = !0;
      return ui(b, a);
    },
    wi = function (a) {
      var b = oi();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    xi = function (a) {
      var b = oi();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    yi = function () {
      if (!mi().g()) return !1;
      var a = oi();
      a.accessedAny = !0;
      return a.active;
    },
    zi = function () {
      var a = oi();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Ai = function (a, b) {
      oi().addListener(a, b);
    },
    Bi = function (a, b) {
      oi().notifyListeners(a, b);
    },
    Ci = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!xi(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Ai(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Di = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var h = d[g];
          !1 === vi(h) || e[h] || (f.push(h), (e[h] = !0));
        }
        return f;
      }
      var d = m(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Ai(d, function (f) {
          var g = c();
          0 < g.length && ((f.pf = g), a(f));
        });
    };
  function Ei() {}
  function Fi() {}
  function Gi(a) {
    for (var b = [], c = 0; c < Hi.length; c++) {
      var d = a(Hi[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var Hi = [P.H, P.T],
    Ii = function (a) {
      var b = a[P.ve];
      b && ig(40);
      var c = a[P.Xf];
      c && ig(41);
      for (
        var d = Ea(b) ? b : [b], e = { sc: 0 };
        e.sc < d.length;
        e = { sc: e.sc }, ++e.sc
      )
        Ka(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== P.ve && g !== P.Xf) {
                var k = d[f.sc],
                  n = ji.qf,
                  p = ji.Ah;
                oi().set(g, h, k, n, p, c);
              }
            };
          })(e)
        );
    },
    Ji = 0,
    Ki = function (a, b) {
      Ka(a, function (e, f) {
        oi().update(e, f);
      });
      Bi(b.eventId, b.priorityId);
      var c = Ra(),
        d = c - Ji;
      Ji && 0 <= d && 1e3 > d && ig(66);
      Ji = c;
    },
    Li = function (a) {
      var b = vi(a);
      return void 0 != b ? b : !0;
    },
    Mi = function () {
      return "G1" + Gi(vi);
    },
    Ni = function (a, b) {
      Ai(a, b);
    },
    Oi = function (a, b) {
      Di(a, b);
    },
    Pi = function (a, b) {
      Ci(a, b);
    };
  var Qi = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var Ri = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var k = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        k && c && (k = decodeURIComponent(k));
        d.push(k);
      }
    }
    return d;
  };
  var Si = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Ti = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function Ui(a) {
    return "null" !== a.origin;
  }
  var Xi = function (a, b, c, d) {
      return Vi(d) ? Ri(a, String(b || Wi()), c) : [];
    },
    $i = function (a, b, c, d, e) {
      if (Vi(e)) {
        var f = Yi(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Zi(
            f,
            function (g) {
              return g.be;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Zi(
            f,
            function (g) {
              return g.bd;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function aj(a, b, c, d) {
    var e = Wi(),
      f = window;
    Ui(f) && (f.document.cookie = a);
    var g = Wi();
    return e != g || (void 0 != c && 0 <= Xi(b, g, !1, d).indexOf(c));
  }
  var ej = function (a, b, c, d) {
      function e(x, y, w) {
        if (null == w) return delete h[y], x;
        h[y] = w;
        return x + "; " + y + "=" + w;
      }
      function f(x, y) {
        if (null == y) return delete h[y], x;
        h[y] = !0;
        return x + "; " + y;
      }
      if (!Vi(c.cb)) return 2;
      var g;
      void 0 == b
        ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = bj(b)),
          (g = a + "=" + b));
      var h = {};
      g = e(g, "path", c.path);
      var k;
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = "" + c.expires);
      g = e(g, "expires", k);
      g = e(g, "max-age", c.Jj);
      g = e(g, "samesite", c.ek);
      c.gk && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = cj(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
          var u = "none" !== p[t] ? p[t] : void 0,
            v = e(g, "domain", u);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (x) {
            q = x;
            continue;
          }
          r = !0;
          if (!dj(u, c.path) && aj(v, a, b, c.cb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return dj(n, c.path) ? 1 : aj(g, a, b, c.cb) ? 0 : 1;
    },
    fj = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return ej(a, b, c);
    };
  function Zi(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        k = b(h);
      k === c
        ? d.push(h)
        : void 0 === f || k < f
        ? ((e = [h]), (f = k))
        : k === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function Yi(a, b, c) {
    for (var d = [], e = Xi(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var k = g.shift();
        k &&
          ((k = k.split("-")),
          d.push({ id: g.join("."), be: 1 * k[0] || 1, bd: 1 * k[1] || 1 }));
      }
    }
    return d;
  }
  var bj = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    gj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    hj = /(^|\.)doubleclick\.net$/i,
    dj = function (a, b) {
      return (
        hj.test(window.document.location.hostname) || ("/" === b && gj.test(a))
      );
    },
    Wi = function () {
      return Ui(window) ? window.document.cookie : "";
    },
    cj = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      hj.test(e) || gj.test(e) || a.push("none");
      return a;
    },
    Vi = function (a) {
      if (!mi().g() || !a || !yi()) return !0;
      if (!xi(a)) return !1;
      var b = vi(a);
      return null == b ? !0 : !!b;
    };
  var ij = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (Qi(a) & 2147483647)) : String(b);
    },
    jj = function (a) {
      return [ij(a), Math.round(Ra() / 1e3)].join(".");
    },
    mj = function (a, b, c, d, e) {
      var f = kj(b);
      return $i(a, f, lj(c), d, e);
    },
    nj = function (a, b, c, d) {
      var e = "" + kj(c),
        f = lj(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    kj = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    lj = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var oj = function () {
    S.dedupe_gclid || (S.dedupe_gclid = "" + jj());
    return S.dedupe_gclid;
  };
  var pj = function () {
    var a = !1;
    return a;
  };
  var Ge = { J: "G-LTF3L1GDT3", xc: "70994710" },
    qj = { vh: "G-LTF3L1GDT3", wh: "G-LTF3L1GDT3" },
    rj = function () {
      var a = [Ge.J];
      return a;
    },
    sj = function () {
      var a = [Ge.J];
      return a;
    },
    tj = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    vj = function (a) {
      return uj().container.hasOwnProperty(a);
    };
  function uj() {
    var a = S.tidr;
    a || ((a = new tj()), (S.tidr = a));
    return a;
  }
  var wj;
  if (3 === Hg.Sd.length) wj = "g";
  else {
    var xj = "G";
    xj = "g";
    wj = xj;
  }
  var yj = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: wj,
      OPT: "o",
    },
    zj = function (a) {
      var b = Ge.J.split("-"),
        c = b[0].toUpperCase(),
        d = yj[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === Hg.Sd.length) {
        var g = "w";
        g = pj() ? "s" : "o";
        f = "2" + g;
      } else f = "";
      return f + d + Hg.Sd + e;
    };
  function Aj(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Bj = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  function Cj() {
    return tb("iPhone") && !tb("iPod") && !tb("iPad");
  }
  tb("Opera");
  tb("Trident") || tb("MSIE");
  tb("Edge");
  !tb("Gecko") ||
    (-1 != sb().toLowerCase().indexOf("webkit") && !tb("Edge")) ||
    tb("Trident") ||
    tb("MSIE") ||
    tb("Edge");
  -1 != sb().toLowerCase().indexOf("webkit") && !tb("Edge") && tb("Mobile");
  tb("Macintosh");
  tb("Windows");
  tb("Linux") || tb("CrOS");
  var Dj = la.navigator || null;
  Dj && (Dj.appVersion || "").indexOf("X11");
  tb("Android");
  Cj();
  tb("iPad");
  tb("iPod");
  Cj() || tb("iPad") || tb("iPod");
  sb().toLowerCase().indexOf("kaios");
  var Ej = function (a) {
    if (!a || !I.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    I.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  };
  var Fj = function () {};
  var Gj = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Hj = function (a, b, c) {
      this.o = a;
      this.g = null;
      this.I = {};
      this.ma = 0;
      this.R = void 0 === b ? 500 : b;
      this.C = void 0 === c ? !1 : c;
      this.B = null;
    };
  ka(Hj, Fj);
  Hj.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.C },
      d = Ti(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.R &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.R));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Gj(c)),
          (c.internalBlockOnErrors = b.C),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Ij(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Hj.prototype.removeEventListener = function (a) {
    a && a.listenerId && Ij(this, "removeEventListener", null, a.listenerId);
  };
  var Kj = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var k;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = Jj(a.vendor.consents, void 0 === d ? "755" : d);
          k =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Jj(a.purpose.consents, b);
        } else k = !0;
      else
        k =
          1 === h
            ? a.purpose && a.vendor
              ? Jj(a.purpose.legitimateInterests, b) &&
                Jj(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return k;
    },
    Jj = function (a, b) {
      return !(!a || !a[b]);
    },
    Ij = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.o.__tcfapi) {
        var e = a.o.__tcfapi;
        e(b, 2, c, d);
      } else if (Lj(a)) {
        Mj(a);
        var f = ++a.ma;
        a.I[f] = c;
        if (a.g) {
          var g = {};
          a.g.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Lj = function (a) {
      if (a.g) return a.g;
      var b;
      a: {
        for (var c = a.o, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.g = b;
      return a.g;
    },
    Mj = function (a) {
      a.B ||
        ((a.B = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.I[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Bj(a.o, a.B));
    };
  var Nj = !0;
  Nj = !1;
  var Oj = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Pj = Aj("", 550),
    Qj = Aj("", 500);
  function Rj() {
    var a = S.tcf || {};
    return (S.tcf = a);
  }
  var Wj = function () {
    var a = Rj(),
      b = new Hj(z, Nj ? 3e3 : -1);
    if (
      !0 === z.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof z.__tcfapi ||
        "function" === typeof b.o.__tcfapi ||
        null != Lj(b))
    ) {
      a.active = !0;
      a.ed = {};
      Sj();
      var c = null;
      Nj
        ? (c = z.setTimeout(function () {
            Tj(a);
            Uj(a);
            c = null;
          }, Qj))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) Tj(a), Uj(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = Vj()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in Oj)
                if (Oj.hasOwnProperty(g))
                  if ("1" === g) {
                    var h = d,
                      k = !0;
                    k = void 0 === k ? !1 : k;
                    var n;
                    var p = h;
                    !1 === p.gdprApplies
                      ? (n = !0)
                      : (void 0 === p.internalErrorState &&
                          (p.internalErrorState = Gj(p)),
                        (n =
                          "error" === p.cmpStatus || 0 !== p.internalErrorState
                            ? !p.internalBlockOnErrors
                            : "loaded" !== p.cmpStatus ||
                              ("tcloaded" !== p.eventStatus &&
                                "useractioncomplete" !== p.eventStatus)
                            ? !1
                            : !0));
                    f["1"] = n
                      ? !1 === h.gdprApplies ||
                        "tcunavailable" === h.tcString ||
                        (void 0 === h.gdprApplies && !k) ||
                        "string" !== typeof h.tcString ||
                        !h.tcString.length
                        ? !0
                        : Kj(h, "1", 0)
                      : !1;
                  } else f[g] = Kj(d, g, Oj[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.ed = e), Uj(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), Tj(a), Uj(a);
      }
    }
  };
  function Tj(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    Nj && (a.ed = Vj());
  }
  function Sj() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = Pj), a);
    Ii(b);
  }
  function Vj() {
    var a = {},
      b;
    for (b in Oj) Oj.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function Uj(a) {
    var b = {},
      c = ((b.ad_storage = a.ed["1"] ? "granted" : "denied"), b);
    Ki(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: Xj() }
    );
  }
  var Xj = function () {
      var a = Rj();
      return a.active ? a.tcString || "" : "";
    },
    Yj = function () {
      var a = Rj();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    Zj = function (a) {
      if (!Oj.hasOwnProperty(String(a))) return !0;
      var b = Rj();
      return b.active && b.ed ? !!b.ed[String(a)] : !0;
    };
  function ak(a, b, c) {
    var d,
      e = Number(null != a.nc ? a.nc : void 0);
    0 !== e && (d = new Date((b || Ra()) + 1e3 * (e || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d,
    };
  }
  var bk = ["1"],
    ck = {},
    dk = {},
    hk = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = ek(a.prefix);
      if (!ck[c] && !fk(c, a.path, a.domain) && b) {
        var d = ek(a.prefix),
          e = jj();
        if (0 === gk(d, e, a)) {
          var f = Gb("google_tag_data", {});
          f._gcl_au ? fg("GTM", 57) : (f._gcl_au = e);
        }
        fk(c, a.path, a.domain);
      }
    };
  function gk(a, b, c, d) {
    var e = nj(b, "1", c.domain, c.path),
      f = ak(c, d);
    f.cb = "ad_storage";
    return fj(a, e, f);
  }
  function fk(a, b, c) {
    var d = mj(a, b, c, bk, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length
      ? ((ck[a] = e.slice(0, 2).join(".")),
        (dk[a] = { id: e.slice(2, 4).join("."), rh: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (dk[a] = { id: e.slice(0, 2).join("."), rh: Number(e[2]) || 0 })
      : (ck[a] = d);
    return !0;
  }
  function ek(a) {
    return (a || "_gcl") + "_au";
  }
  function ik() {
    for (var a = jk, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function kk() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var jk, lk;
  function mk(a) {
    function b(k) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = lk[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return k;
    }
    jk = jk || kk();
    lk = lk || ik();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var nk;
  var rk = function () {
      var a = ok,
        b = pk,
        c = qk(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Qb(I, "mousedown", d);
        Qb(I, "keyup", d);
        Qb(I, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    sk = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      qk().decorators.push(f);
    },
    tk = function (a, b, c) {
      for (var d = qk().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var k = g.domains,
              n = a,
              p = !!g.sameHost;
            if (k && (p || n !== I.location.hostname))
              for (var q = 0; q < k.length; q++)
                if (k[q] instanceof RegExp) {
                  if (k[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(k[q]) ||
                  (p && 0 <= k[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Ua(e, g.callback());
        }
      }
      return e;
    };
  function qk() {
    var a = Gb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var uk = /(.*?)\*(.*?)\*(.*)/,
    vk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    wk = /^(?:www\.|m\.|amp\.)+/,
    xk = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function yk(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Ak = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (
          void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString()
        ) {
          b.push(c);
          var e = b,
            f = e.push,
            g,
            h = String(d);
          jk = jk || kk();
          lk = lk || ik();
          for (var k = [], n = 0; n < h.length; n += 3) {
            var p = n + 1 < h.length,
              q = n + 2 < h.length,
              r = h.charCodeAt(n),
              t = p ? h.charCodeAt(n + 1) : 0,
              u = q ? h.charCodeAt(n + 2) : 0,
              v = r >> 2,
              x = ((r & 3) << 4) | (t >> 4),
              y = ((t & 15) << 2) | (u >> 6),
              w = u & 63;
            q || ((w = 64), p || (y = 64));
            k.push(jk[v], jk[x], jk[y], jk[w]);
          }
          g = k.join("");
          f.call(e, g);
        }
      }
    var A = b.join("*");
    return ["1", zk(A), A].join("*");
  };
  function zk(a, b) {
    var c = [
        z.navigator.userAgent,
        new Date().getTimezoneOffset(),
        Eb.userLanguage || Eb.language,
        Math.floor(Ra() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = nk)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    nk = d;
    for (var k = 4294967295, n = 0; n < c.length; n++)
      k = (k >>> 8) ^ nk[(k ^ c.charCodeAt(n)) & 255];
    return ((k ^ -1) >>> 0).toString(36);
  }
  function Bk() {
    return function (a) {
      var b = yh(z.location.href),
        c = b.search.replace("?", ""),
        d = th(c, "_gl", !1, !0) || "";
      a.query = Ck(d) || {};
      var e = wh(b, "fragment").match(yk("_gl"));
      a.fragment = Ck((e && e[3]) || "") || {};
    };
  }
  function Dk(a, b) {
    var c = yk(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Ek = function (a, b) {
      b || (b = "_gl");
      var c = xk.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Dk(b, (c[2] || "").slice(1)),
        f = Dk(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Fk = function (a) {
      var b = Bk(),
        c = qk();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ua(d, e.query), a && Ua(d, e.fragment));
      return d;
    },
    Ck = function (a) {
      try {
        var b = Gk(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = mk(d[e + 1]);
            c[f] = g;
          }
          fg("TAGGING", 6);
          return c;
        }
      } catch (h) {
        fg("TAGGING", 8);
      }
    };
  function Gk(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = uk.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          k;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === zk(h, p)) {
              k = !0;
              break a;
            }
          k = !1;
        }
        if (k) return h;
        fg("TAGGING", 7);
      }
    }
  }
  function Hk(a, b, c, d) {
    function e(p) {
      p = Dk(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = xk.exec(c);
    if (!f) return "";
    var g = f[1],
      h = f[2] || "",
      k = f[3] || "",
      n = a + "=" + b;
    d ? (k = "#" + e(k.substring(1))) : (h = "?" + e(h.substring(1)));
    return "" + g + h + k;
  }
  function Ik(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = tk(b, 1, c),
      e = tk(b, 2, c),
      f = tk(b, 3, c);
    if (Wa(d)) {
      var g = Ak(d);
      c ? Jk("_gl", g, a) : Kk("_gl", g, a, !1);
    }
    if (!c && Wa(e)) {
      var h = Ak(e);
      Kk("_gl", h, a, !0);
    }
    for (var k in f)
      if (f.hasOwnProperty(k))
        a: {
          var n = k,
            p = f[k],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              Kk(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              Jk(n, p, q);
              break a;
            }
          }
          "string" == typeof q && Hk(n, p, q);
        }
  }
  function Kk(a, b, c, d) {
    if (c.href) {
      var e = Hk(a, b, c.href, void 0 === d ? !1 : d);
      rb.test(e) && (c.href = e);
    }
  }
  function Jk(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var h = e[g];
          if (h.name === a) {
            h.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var k = I.createElement("input");
          k.setAttribute("type", "hidden");
          k.setAttribute("name", a);
          k.setAttribute("value", b);
          c.appendChild(k);
        }
      } else if ("post" === d) {
        var n = Hk(a, b, c.action);
        rb.test(n) && (c.action = n);
      }
    }
  }
  function ok(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Ik(e, e.hostname);
      }
    } catch (g) {}
  }
  function pk(a) {
    try {
      if (a.action) {
        var b = wh(yh(a.action), "host");
        Ik(a, b);
      }
    } catch (c) {}
  }
  var Lk = function (a, b, c, d) {
      rk();
      sk(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Mk = function (a, b) {
      rk();
      sk(a, [vh(z.location, "host", !0)], b, !0, !0);
    },
    Nk = function () {
      var a = I.location.hostname,
        b = vk.exec(I.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(wk, ""),
        k = e.replace(wk, ""),
        n;
      if (!(n = h === k)) {
        var p = "." + k;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    Ok = function (a, b) {
      return !1 === a ? !1 : a || b || Nk();
    };
  var Pk = {};
  var Qk = function (a) {
    for (
      var b = [],
        c = I.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Vf: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function Rk(a, b) {
    var c = Qk(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Vf] || (d[c[e].Vf] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), Ka: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Vf].push(g);
      }
    }
    return d;
  }
  var Sk = /^\w+$/,
    Tk = /^[\w-]+$/,
    Uk = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    Vk = function () {
      if (!mi().g() || !yi()) return !0;
      var a = vi("ad_storage");
      return null == a ? !0 : !!a;
    },
    Wk = function (a, b) {
      xi("ad_storage")
        ? Vk()
          ? a()
          : Di(a, "ad_storage")
        : b
        ? fg("TAGGING", 3)
        : Ci(
            function () {
              Wk(a, !0);
            },
            ["ad_storage"]
          );
    },
    Yk = function (a) {
      return Xk(a).map(function (b) {
        return b.Ka;
      });
    },
    Xk = function (a) {
      var b = [];
      if (!Ui(z) || !I.cookie) return b;
      var c = Xi(a, I.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { od: d.od }, e++) {
        var f = Zk(c[e]);
        if (null != f) {
          var g = f,
            h = g.version;
          d.od = g.Ka;
          var k = g.timestamp,
            n = g.labels,
            p = Fa(
              b,
              (function (q) {
                return function (r) {
                  return r.Ka === q.od;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, k)),
              (p.labels = $k(p.labels, n || [])))
            : b.push({ version: h, Ka: d.od, timestamp: k, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return al(b);
    };
  function $k(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function bl(a) {
    return a && "string" == typeof a && a.match(Sk) ? a : "_gcl";
  }
  var dl = function () {
      var a = yh(z.location.href),
        b = wh(a, "query", !1, void 0, "gclid"),
        c = wh(a, "query", !1, void 0, "gclsrc"),
        d = wh(a, "query", !1, void 0, "wbraid"),
        e = wh(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || th(f, "gclid", !1);
        c = c || th(f, "gclsrc", !1);
        d = d || th(f, "wbraid", !1);
      }
      return cl(b, c, e, d);
    },
    cl = function (a, b, c, d) {
      var e = {},
        f = function (g, h) {
          e[h] || (e[h] = []);
          e[h].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Tk.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(Tk))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    fl = function (a) {
      var b = dl();
      Wk(function () {
        el(b, !1, a);
      });
    };
  function el(a, b, c, d, e) {
    function f(x, y) {
      var w = gl(x, g);
      w && (fj(w, y, h), (k = !0));
    }
    c = c || {};
    e = e || [];
    var g = bl(c.prefix);
    d = d || Ra();
    var h = ak(c, d, !0);
    h.cb = "ad_storage";
    var k = !1,
      n = Math.round(d / 1e3),
      p = function (x) {
        var y = ["GCL", n, x];
        0 < e.length && y.push(e.join("."));
        return y.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == Pk.enable_gbraid_cookie_write
        ? 0
        : Pk.enable_gbraid_cookie_write) &&
      !k &&
      a.gb
    ) {
      var q = a.gb[0],
        r = gl("gb", g),
        t = !1;
      if (!b)
        for (var u = Xk(r), v = 0; v < u.length; v++)
          u[v].Ka === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var il = function (a, b) {
      var c = Fk(!0);
      Wk(function () {
        for (var d = bl(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Uk[f]) {
            var g = gl(f, d),
              h = c[g];
            if (h) {
              var k = Math.min(hl(h), Ra()),
                n;
              b: {
                var p = k;
                if (Ui(z))
                  for (
                    var q = Xi(g, I.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (hl(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = ak(b, k, !0);
                t.cb = "ad_storage";
                fj(g, h, t);
              }
            }
          }
        }
        el(cl(c.gclid, c.gclsrc), !1, b);
      });
    },
    gl = function (a, b) {
      var c = Uk[a];
      if (void 0 !== c) return b + c;
    },
    hl = function (a) {
      return 0 !== jl(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Zk(a) {
    var b = jl(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          Ka: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function jl(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Tk.test(a[2])
      ? []
      : a;
  }
  var kl = function (a, b, c, d, e) {
      if (Ea(b) && Ui(z)) {
        var f = bl(e),
          g = function () {
            for (var h = {}, k = 0; k < a.length; ++k) {
              var n = gl(a[k], f);
              if (n) {
                var p = Xi(n, I.cookie, void 0, "ad_storage");
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        Wk(function () {
          Lk(g, b, c, d);
        });
      }
    },
    al = function (a) {
      return a.filter(function (b) {
        return Tk.test(b.Ka);
      });
    },
    ll = function (a, b) {
      if (Ui(z)) {
        for (var c = bl(b.prefix), d = {}, e = 0; e < a.length; e++)
          Uk[a[e]] && (d[a[e]] = Uk[a[e]]);
        Wk(function () {
          Ka(d, function (f, g) {
            var h = Xi(c + g, I.cookie, void 0, "ad_storage");
            h.sort(function (t, u) {
              return hl(u) - hl(t);
            });
            if (h.length) {
              var k = h[0],
                n = hl(k),
                p = 0 !== jl(k.split(".")).length ? k.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== jl(k.split(".")).length ? k.split(".")[2] : void 0;
              q[f] = [r];
              el(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function ml(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var nl = function (a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (yi()) {
      var c = dl();
      if (ml(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        Mk(function () {
          return d;
        }, 3);
        Mk(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  };
  function ol(a, b) {
    var c = bl(b),
      d = gl(a, c);
    if (!d) return 0;
    for (var e = Xk(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function pl(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Ll = /[A-Z]+/,
    Ml = /\s/,
    Nl = function (a) {
      if (m(a)) {
        a = Pa(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (Ll.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (Ml.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], P: d };
          }
        }
      }
    },
    Pl = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = Nl(a[c]);
        d && (b[d.id] = d);
      }
      Ol(b);
      var e = [];
      Ka(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function Ol(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.P[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Rl = function (a, b, c, d) {
      return (2 === Ql() || d || "http:" != z.location.protocol ? a : b) + c;
    },
    Ql = function () {
      var a = Mb(),
        b;
      if (1 === a)
        a: {
          var c = Mg;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = I.getElementsByTagName("script"),
              h = 0;
            h < g.length && 100 > h;
            h++
          ) {
            var k = g[h].src;
            if (k) {
              k = k.toLowerCase();
              if (0 === k.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === k.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var cm = function (a, b, c) {
      this.Ba = a;
      this.eventName = b;
      this.s = c;
      this.F = {};
      this.metadata = mc(c.eventMetadata || {});
      this.ka = !1;
    },
    dm = function (a, b, c) {
      var d = a.s.getWithConfig(b);
      void 0 !== d ? (a.F[b] = d) : void 0 !== c && (a.F[b] = c);
    },
    em = function (a, b, c) {
      var d = ih(a.Ba);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function fm(a) {
    return {
      getDestinationId: function () {
        return a.Ba;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.F[b];
      },
      setHitData: function (b, c) {
        return void (a.F[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.F[b] && (a.F[b] = c);
      },
      copyToHitData: function (b, c) {
        dm(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.ka = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
    };
  }
  var hm = function (a) {
      var b = gm[a.Ba];
      if (!a.ka && b)
        for (var c = fm(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.ka = !0;
          }
          if (a.ka) break;
        }
    },
    im = function (a, b) {
      var c = gm[a];
      c || (c = gm[a] = []);
      c.push(b);
    },
    gm = {};
  var jm = [];
  jm[9] = !0;
  jm[10] = !0;
  jm[12] = !0;
  jm[20] = !0;
  jm[21] = !0;
  jm[22] = !0;
  jm[16] = !0;
  function zm(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var Am = !1;
  function Bm() {
    if (zm("join-ad-interest-group") && Ca(Eb.joinAdInterestGroup)) return !0;
    Am ||
      (Ej(
        "A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (Am = !0));
    return zm("join-ad-interest-group") && Ca(Eb.joinAdInterestGroup);
  }
  function Cm(a, b) {
    var c = void 0;
    try {
      c = I.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Ra() - d) {
        fg("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          I.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          fg("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Ob(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Ra() },
      c
    );
  }
  function Dm(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return yh("" + c + b).href;
    }
  }
  function Em(a, b) {
    return Fm() ? Dm(a, b) : void 0;
  }
  function Fm() {
    var a = !1;
    return a;
  }
  function Gm() {
    return !!Hg.Td && "SGTM_TOKEN" !== Hg.Td.split("@@").join("");
  }
  var Jm = !1;
  var Km = function () {
      this.g = {};
    },
    Lm = function (a, b, c) {
      null != c && (a.g[b] = c);
    },
    Mm = function (a) {
      return Object.keys(a.g)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b]);
        })
        .join("&");
    },
    Om = function (a, b, c, d, e) {};
  var Qm = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Rm = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Sm = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Tm = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
      " "
    );
  var Um = function () {
      var a = !1;
      a = !0;
      return a;
    },
    Wm = function (a) {
      var b = $g("gtm.allowlist") || $g("gtm.whitelist");
      b && ig(9);
      Um() && (b = ["google", "gtagfl", "lcl", "zone"]);
      var c = b && Xa(Oa(b), Rm),
        d = $g("gtm.blocklist") || $g("gtm.blacklist");
      d || ((d = $g("tagTypeBlacklist")) && ig(3));
      d ? ig(8) : (d = []);
      Vm() &&
        ((d = Oa(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Oa(d).indexOf("google") && ig(2);
      var e = d && Xa(Oa(d), Sm),
        f = {};
      return function (g) {
        var h = g && g[Jd.Db];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var k = Tg[h] || [],
          n = a(h, k);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(h))
                if (k && 0 < k.length)
                  for (var q = 0; q < k.length; q++) {
                    if (0 > c.indexOf(k[q])) {
                      ig(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var t = 0 <= e.indexOf(h);
          if (t) r = t;
          else {
            var u = Ia(e, k || []);
            u && ig(10);
            r = u;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= k.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = Ia(e, Tm));
        return (f[h] = v);
      };
    },
    Vm = function () {
      return Qm.test(z.location && z.location.hostname);
    };
  var Zm = function (a) {
      var b = !1;
      return b;
    },
    bn = function (a, b) {
      var c;
      return c;
    },
    en = function (a) {},
    jn = function (a) {},
    kn = function () {
      return (
        "&tc=" +
        ie.filter(function (a) {
          return a;
        }).length
      );
    },
    nn = function () {
      2022 <= ln().length && mn();
    },
    on = function (a) {
      return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*";
    },
    qn = function () {
      pn || (pn = z.setTimeout(mn, 500));
    },
    mn = function (a) {
      pn && (z.clearTimeout(pn), (pn = void 0));
      if (void 0 !== Xm && (!rn[Xm] || sn || tn || Zm(a)))
        if (void 0 === an[Xm] && (un[Xm] || vn.Aj() || 0 >= wn--))
          ig(1), (un[Xm] = !0);
        else {
          void 0 === an[Xm] && vn.Yj();
          var b = ln(!0, a);
          a ? Wb(b) : Pb(b);
          if (xn || (yn && 0 < zn.length)) {
            var c = b.replace("/a?", "/td?");
            Pb(c);
          }
          rn[Xm] = !0;
          yn = xn = An = Bn = Cn = tn = sn = "";
          zn = [];
        }
    },
    ln = function (a, b) {
      var c = Xm;
      if (void 0 === c) return "";
      var d = gg("GTM"),
        e = gg("TAGGING");
      return [
        Dn,
        rn[c] ? "" : "&es=1",
        En[c],
        en(c),
        d ? "&u=" + d : "",
        e ? "&ut=" + e : "",
        kn(),
        sn,
        tn,
        Cn,
        Bn,
        jn(a),
        An,
        xn,
        bn(a, b),
        yn ? "&dl=" + encodeURIComponent(yn) : "",
        0 < zn.length ? "&tdp=" + zn.join(".") : "",
        "&z=0",
      ].join("");
    },
    Gn = function () {
      Dn = Fn();
    },
    Fn = function () {
      return [Hn, "&v=3&t=t", "&pid=" + Ga(), "&rv=" + Hg.Sd].join("");
    },
    hn = ["L", "S", "Y"],
    dn = ["S", "E"],
    In = { sampleRate: "0.005000", Mh: "", Lh: Number("5") },
    Jn =
      0 <= I.location.search.indexOf("?gtm_latency=") ||
      0 <= I.location.search.indexOf("&gtm_latency="),
    Kn;
  if (!(Kn = Jn)) {
    var Ln = Math.random(),
      Mn = In.sampleRate;
    Kn = Ln < Mn;
  }
  var Nn = Kn,
    Hn = "https://www.googletagmanager.com/a?id=" + Ge.J + "&cv=1",
    On = {
      label: Ge.J + " Container",
      children: [{ label: "Initialization", children: [] }],
    },
    Dn = Fn(),
    rn = {},
    sn = "",
    tn = "",
    An = "",
    Bn = "",
    xn = "",
    zn = [],
    yn = "",
    gn = {},
    fn = !1,
    cn = {},
    Pn = {},
    Cn = "",
    Xm = void 0,
    En = {},
    un = {},
    pn = void 0,
    Qn = 5;
  0 < In.Lh && (Qn = In.Lh);
  var vn = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        Aj: function () {
          return c < a ? !1 : Ra() - d[c % a] < b;
        },
        Yj: function () {
          var f = c++ % a;
          d[f] = Ra();
        },
      };
    })(Qn, 1e3),
    wn = 1e3,
    Sn = function (a, b) {
      if (Nn && void 0 !== a && !un[a] && Xm !== a) {
        mn();
        Xm = a;
        An = sn = "";
        En[a] = "&e=" + on(b) + "&eid=" + a;
        qn();
      }
    },
    Tn = function (a, b, c, d) {
      if (Nn && b) {
        var e,
          f = String(b[Jd.Db] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!un[a]) {
          a !== Xm && (mn(), (Xm = a));
          sn = sn ? sn + "." + g : "&tr=" + g;
          var h = b["function"];
          if (!h)
            throw Error("Error: No function name given for function call.");
          var k = (ke[h] ? "1" : "2") + e;
          An = An ? An + "." + k : "&ti=" + k;
          qn();
          nn();
        }
      }
    };
  var $n = function (a, b, c) {
      if (Nn && void 0 !== a && !un[a]) {
        a !== Xm && (mn(), (Xm = a));
        var d = c + b;
        tn = tn ? tn + "." + d : "&epr=" + d;
        qn();
        nn();
      }
    },
    ao = function (a, b, c) {},
    $m = ["S", "P", "C", "Z"],
    bo = {},
    co = ((bo[1] = 5), (bo[2] = 5), (bo[3] = 5), bo),
    Ym = {},
    an = {},
    eo = function (a, b, c) {},
    fo = function () {
      if (Nn) {
        z.setInterval(Gn, 864e5);
      }
    };
  var go = { initialized: 11, complete: 12, interactive: 13 },
    ho = {},
    io = Object.freeze(((ho[P.Ja] = !0), ho)),
    jo =
      0 <= I.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= I.location.search.indexOf("&gtm_diagnostics="),
    lo = function (a, b, c) {
      if ("config" !== a || 1 < Nl(b).P.length) return;
      var d,
        e = Gb("google_tag_data", {});
      e.td || (e.td = {});
      d = e.td;
      var f = mc(c.globalConfig);
      mc(c.eventModel, f);
      var g = [],
        h;
      for (h in d) {
        var k = ko(d[h], f);
        k.length && (jo && console.log(k), g.push(h));
      }
      if (g.length) {
        if (g.length) {
          var n = b + "*" + g.join(".");
          xn = xn ? xn + "!" + n : "&tdc=" + n;
        }
        fg("TAGGING", go[I.readyState] || 14);
      }
      d[b] = f;
    };
  function mo(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function ko(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? io[q] : t;
      },
      f;
    for (f in mo(a, b)) {
      var g = (d ? d + "." : "") + f,
        h = e(f, a),
        k = e(f, b),
        n = "object" === jc(h) || "array" === jc(h),
        p = "object" === jc(k) || "array" === jc(k);
      if (n && p) ko(h, k, c, g);
      else if (n || p || h !== k) c[g] = !0;
    }
    return Object.keys(c);
  }
  var no = !1,
    oo = 0,
    po = [];
  function qo(a) {
    if (!no) {
      var b = I.createEventObject,
        c = "complete" == I.readyState,
        d = "interactive" == I.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        no = !0;
        for (var e = 0; e < po.length; e++) J(po[e]);
      }
      po.push = function () {
        for (var f = 0; f < arguments.length; f++) J(arguments[f]);
        return 0;
      };
    }
  }
  function ro() {
    if (!no && 140 > oo) {
      oo++;
      try {
        I.documentElement.doScroll("left"), qo();
      } catch (a) {
        z.setTimeout(ro, 50);
      }
    }
  }
  var so = function (a) {
    no ? a() : po.push(a);
  };
  var to = function () {
    this.I = 0;
    this.g = {};
  };
  to.prototype.o = function (a, b, c) {
    var d = ++this.I;
    this.g[a] = this.g[a] || {};
    this.g[a][String(d)] = { listener: b, Xa: c };
    return d;
  };
  to.prototype.B = function (a, b) {
    var c = this.g[a],
      d = String(b);
    if (!c || !c[d]) return !1;
    delete c[d];
    return !0;
  };
  to.prototype.C = function (a, b) {
    var c = [];
    Ka(this.g[a], function (d, e) {
      0 > c.indexOf(e.listener) &&
        (void 0 === e.Xa || 0 <= b.indexOf(e.Xa)) &&
        c.push(e.listener);
    });
    return c;
  };
  var uo = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Ge.J,
    };
  };
  var wo = function (a, b) {
      this.g = !1;
      this.C = [];
      this.I = { tags: [] };
      this.R = !1;
      this.o = this.B = 0;
      vo(this, a, b);
    },
    xo = function (a, b, c, d) {
      if (Kg.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      lc(d) && (e = mc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.I.tags.push(e) - 1;
    },
    yo = function (a, b, c, d) {
      var e = a.I.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    zo = function (a) {
      if (!a.g) {
        for (var b = a.C, c = 0; c < b.length; c++) b[c]();
        a.g = !0;
        a.C.length = 0;
      }
    },
    vo = function (a, b, c) {
      void 0 !== b && a.Vd(b);
      c &&
        z.setTimeout(function () {
          return zo(a);
        }, Number(c));
    };
  wo.prototype.Vd = function (a) {
    var b = this,
      c = Ta(function () {
        return J(function () {
          a(Ge.J, b.I);
        });
      });
    this.g ? c() : this.C.push(c);
  };
  var Ao = function (a) {
      a.B++;
      return Ta(function () {
        a.o++;
        a.R && a.o >= a.B && zo(a);
      });
    },
    Bo = function (a) {
      a.R = !0;
      a.o >= a.B && zo(a);
    };
  var Co = function () {
      function a(d) {
        return !Da(d) || 0 > d ? 0 : d;
      }
      if (!S._li && z.performance && z.performance.timing) {
        var b = z.performance.timing.navigationStart,
          c = Da(ah.get("gtm.start")) ? ah.get("gtm.start") : 0;
        S._li = { cst: a(c - b), cbt: a(Rg - b) };
      }
    },
    Do = function (a) {
      z.performance && z.performance.mark(Ge.J + "_" + a + "_start");
    },
    Eo = function (a) {
      if (z.performance) {
        var b = Ge.J + "_" + a + "_start",
          c = Ge.J + "_" + a + "_duration";
        z.performance.measure(c, b);
        var d = z.performance.getEntriesByName(c)[0];
        z.performance.clearMarks(b);
        z.performance.clearMeasures(c);
        var e = S._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (S._p = e));
        return d.duration;
      }
    },
    Fo = function () {
      if (z.performance && z.performance.now) {
        var a = S._p || {};
        a.PAGEVIEW = z.performance.now();
        S._p = a;
      }
    };
  var Go = {},
    Ho = function () {
      return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject];
    },
    Io = !1;
  function Lo() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var Mo = function (a) {},
    No = function (a, b) {
      return function () {
        var c = Ho(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              k = 0 > g.indexOf("&tid=" + b);
            k &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            k &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function So(a, b, c, d) {
    var e = ie[a],
      f = To(a, b, c, d);
    if (!f) return null;
    var g = qe(e[Jd.Qg], c, []);
    if (g && g.length) {
      var h = g[0];
      f = So(
        h.index,
        {
          onSuccess: f,
          onFailure: 1 === h.kh ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function To(a, b, c, d) {
    function e() {
      if (f[Jd.Hi]) h();
      else {
        var x = re(f, c, []);
        var y = x[Jd.Rh];
        if (null != y)
          for (var w = 0; w < y.length; w++)
            if (!Li(y[w])) {
              h();
              return;
            }
        var A = xo(c.sb, String(f[Jd.Db]), Number(f[Jd.Sg]), x[Jd.Ii]),
          B = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var F = Ra() - E;
            Tn(c.id, ie[a], "5", F);
            yo(c.sb, A, "success", F);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var F = Ra() - E;
            Tn(c.id, ie[a], "6", F);
            yo(c.sb, A, "failure", F);
            h();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        Tn(c.id, f, "1");
        var C = function () {
          var F = Ra() - E;
          Tn(c.id, f, "7", F);
          yo(c.sb, A, "exception", F);
          B || ((B = !0), h());
        };
        var E = Ra();
        try {
          pe(x, { event: c, index: a, type: 1 });
        } catch (F) {
          C(F);
        }
      }
    }
    var f = ie[a],
      g = b.onSuccess,
      h = b.onFailure,
      k = b.terminate;
    if (c.Df(f)) return null;
    var n = qe(f[Jd.Tg], c, []);
    if (n && n.length) {
      var p = n[0],
        q = So(p.index, { onSuccess: g, onFailure: h, terminate: k }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.kh ? k : q;
    }
    if (f[Jd.Kg] || f[Jd.Mi]) {
      var r = f[Jd.Kg] ? je : c.pk,
        t = g,
        u = h;
      if (!r[a]) {
        e = Ta(e);
        var v = Uo(a, r, e);
        g = v.onSuccess;
        h = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function Uo(a, b, c) {
    var d = [],
      e = [];
    b[a] = Vo(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Wo;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Xo;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Vo(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Wo(a) {
    a();
  }
  function Xo(a, b) {
    b();
  }
  var Yo = !1;
  var $o = function (a, b, c) {
      if (!Zo() && !vj(a)) {
        var d = c ? "/gtag/js" : "/gtm.js",
          e = "?id=" + encodeURIComponent(a) + "&l=" + Hg.fa,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        var g = Gm();
        g && (e += "&sign=" + Hg.Td);
        var h = Em(b, d + e);
        if (!h) {
          var k = Hg.yc + d;
          g &&
            Fb &&
            f &&
            (k = Fb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          h = Rl("https://", "http://", k + e);
        }
        uj().container[a] = !0;
        Lb(h);
      }
    },
    ap = function (a, b) {
      if (Yo) {
        var c;
        if ((c = !Zo())) c = !uj().destination.hasOwnProperty(a);
        if (c) {
          var d =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            Hg.fa +
            "&cx=c";
          Gm() && (d += "&sign=" + Hg.Td);
          var e = Em(b, d);
          e || (e = Rl("https://", "http://", Hg.yc + d));
          uj().destination[a] = !0;
          Lb(e);
        }
      } else $o(a, b, !0);
    };
  function Zo() {
    if (pj()) {
      return !0;
    }
    return !1;
  }
  var cp = function (a, b) {
      return 1 === arguments.length ? bp("set", a) : bp("set", a, b);
    },
    dp = function (a, b) {
      return 1 === arguments.length ? bp("config", a) : bp("config", a, b);
    },
    ep = function (a, b, c) {
      c = c || {};
      c[P.Bb] = a;
      return bp("event", b, c);
    };
  function bp(a) {
    return arguments;
  }
  var fp = function () {
    this.g = [];
    this.o = [];
  };
  fp.prototype.enqueue = function (a, b, c) {
    var d = this.g.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.g.push(e);
    for (var f = 0; f < this.o.length; f++)
      try {
        this.o[f](e);
      } catch (g) {}
  };
  fp.prototype.listen = function (a) {
    this.o.push(a);
  };
  fp.prototype.get = function () {
    for (var a = {}, b = 0; b < this.g.length; b++) {
      var c = this.g[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  fp.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.g.length; d++) {
      var e = this.g[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.g = c;
    return b;
  };
  var hp = function (a, b, c) {
      gp().enqueue(a, b, c);
    },
    jp = function () {
      var a = ip;
      gp().listen(a);
    };
  function gp() {
    var a = S.mb;
    a || ((a = new fp()), (S.mb = a));
    return a;
  }
  var rp = function (a) {
      var b = S.zones;
      return b
        ? b.getIsAllowedFn(rj(), a)
        : function () {
            return !0;
          };
    },
    sp = function (a) {
      var b = S.zones;
      return b ? b.isActive(rj(), a) : !0;
    };
  var vp = function (a, b) {
    for (var c = [], d = 0; d < ie.length; d++)
      if (a[d]) {
        var e = ie[d];
        var f = Ao(b.sb);
        try {
          var g = So(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var h = c,
              k = h.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = ke[p];
            k.call(h, {
              Gh: n,
              yh: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else tp(d, b), f();
        } catch (t) {
          f();
        }
      }
    c.sort(up);
    for (var r = 0; r < c.length; r++) c[r].execute();
    return 0 < c.length;
  };
  var xp = function (a, b) {
    if (!wp) return !1;
    var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
      d = wp.C(a.event, c ? String(c).split(",") : []);
    if (!d.length) return !1;
    for (var e = 0; e < d.length; ++e) {
      var f = Ao(b);
      try {
        d[e](a, f);
      } catch (g) {
        f();
      }
    }
    return !0;
  };
  function up(a, b) {
    var c,
      d = b.yh,
      e = a.yh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Gh,
        h = b.Gh;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function tp(a, b) {
    if (!Nn) return;
    var c = function (d) {
      var e = b.Df(ie[d]) ? "3" : "4",
        f = qe(ie[d][Jd.Qg], b, []);
      f && f.length && c(f[0].index);
      Tn(b.id, ie[d], e);
      var g = qe(ie[d][Jd.Tg], b, []);
      g && g.length && c(g[0].index);
    };
    c(a);
  }
  var yp = !1,
    wp;
  var zp = function () {
    wp || (wp = new to());
    return wp;
  };
  var Ep = function (a) {
    var b = Ra(),
      c = a["gtm.uniqueEventId"],
      d = a["gtm.priorityId"],
      e = a.event;
    if ("gtm.js" === e) {
      if (yp) return !1;
      yp = !0;
    }
    var h,
      k = !1;
    if (sp(c)) h = rp(c);
    else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
        return !1;
      k = !0;
      h = rp(Number.MAX_SAFE_INTEGER);
    }
    Sn(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var r = {
        id: c,
        priorityId: d,
        name: e,
        Df: Wm(h),
        pk: [],
        th: function () {
          ig(6);
        },
        bh: Ap(),
        dh: Bp(c),
        sb: new wo(q, p),
      },
      t = Be(r);
    k && (t = Cp(t));
    var u = vp(t, r),
      v = !1;
    v = xp(a, r.sb);
    Bo(r.sb);
    ("gtm.js" !== e && "gtm.sync" !== e) || Mo(Ge.J);
    return Dp(t, u) || v;
  };
  function Bp(a) {
    return function (b) {
      Nn && (rc(b) || ao(a, "input", b));
    };
  }
  function Ap() {
    var a = {};
    a.event = eh("event", 1);
    a.ecommerce = eh("ecommerce", 1);
    a.gtm = eh("gtm");
    a.eventModel = eh("eventModel");
    return a;
  }
  function Cp(a) {
    for (var b = [], c = 0; c < a.length; c++)
      a[c] &&
        (Jg[String(ie[c][Jd.Db])] && (b[c] = !0),
        void 0 !== ie[c][Jd.Ni] && (b[c] = !0));
    return b;
  }
  function Dp(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && ie[c] && !Kg[String(ie[c][Jd.Db])]) return !0;
    return !1;
  }
  var Fp = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.globalConfig = {};
      this.dataLayerConfig = {};
      this.remoteConfig = {};
      this.eventMetadata = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.isGtmEvent = !1;
    },
    Gp = function (a, b) {
      a.eventModel = b;
      return a;
    },
    Hp = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    Ip = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    Jp = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    Kp = function (a, b) {
      a.dataLayerConfig = b;
      return a;
    },
    Lp = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    Mp = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    Np = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    Op = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    Pp = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    Qp = function (a, b) {
      a.onFailure = b;
      return a;
    };
  Fp.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    Rp(this, this.globalConfig[a], this.dataLayerConfig[a]) && (ig(71), ig(79));
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
  };
  Fp.prototype.getTopLevelKeys = function () {
    function a(f) {
      for (var g = Object.keys(f), h = 0; h < g.length; ++h) b[g[h]] = 1;
    }
    var b = {};
    a(this.eventModel);
    a(this.targetConfig);
    a(this.containerConfig);
    a(this.globalConfig);
    for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
      var e = c[d];
      if (
        "event" !== e &&
        "gtm" !== e &&
        "tagTypeBlacklist" !== e &&
        !b.hasOwnProperty(e)
      ) {
        ig(71);
        ig(80);
        break;
      }
    }
    return Object.keys(b);
  };
  Fp.prototype.getMergedValues = function (a, b) {
    function c(h) {
      lc(h) &&
        Ka(h, function (k, n) {
          e = !0;
          d[k] = n;
        });
    }
    var d = {},
      e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.globalConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    var f = e,
      g = d;
    d = {};
    e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.dataLayerConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    if (e !== f || Rp(this, d, g)) ig(71), ig(81);
    e = f;
    d = g;
    return e ? d : void 0;
  };
  Fp.prototype.getKeysFromFirstOfAnyScope = function (a) {
    var b = {},
      c = !1,
      d = function (g) {
        for (var h = 0; h < a.length; h++)
          void 0 !== g[a[h]] && ((b[a[h]] = g[a[h]]), (c = !0));
        return c;
      };
    if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig))
      return b;
    d(this.globalConfig);
    var e = b,
      f = c;
    b = {};
    c = !1;
    d(this.dataLayerConfig);
    Rp(this, b, e) && (ig(71), ig(82));
    b = e;
    c = f;
    if (c) return b;
    d(this.remoteConfig);
    return b;
  };
  var Rp = function (a, b, c) {
    try {
      if (b === c) return !1;
      var d = jc(b);
      if (d !== jc(c) || !((lc(b) && lc(c)) || "array" === d)) return !0;
      if ("array" === d) {
        if (b.length !== c.length) return !0;
        for (var e = 0; e < b.length; e++) if (Rp(a, b[e], c[e])) return !0;
      } else {
        for (var f in c) if (!b.hasOwnProperty(f)) return !0;
        for (var g in b)
          if (!c.hasOwnProperty(g) || Rp(a, b[g], c[g])) return !0;
      }
    } catch (h) {
      ig(72);
    }
    return !1;
  };
  var Sq = function () {
      var a = !0;
      (Zj(7) && Zj(9) && Zj(10)) || (a = !1);
      return a;
    },
    Tq = function () {
      var a = !0;
      (Zj(3) && Zj(4)) || (a = !1);
      return a;
    };
  var Mr = null,
    Nr = !1;
  function Or(a) {
    return Nr && !a ? (Mr = Mr || new Pr()) : (S.gcq = S.gcq || new Pr());
  }
  var Qr = function (a, b, c) {
      Or().register(a, b, c);
    },
    Rr = function (a, b, c, d) {
      Or().push("event", [b, a], c, d);
    },
    Sr = function (a, b, c, d) {
      Or().insert("event", [b, a], c, d);
    },
    Tr = function (a, b, c) {
      Or().push("config", [a], b, c);
    },
    Ur = function (a, b, c, d) {
      Or().push("get", [a, b], c, d);
    },
    Vr = function (a) {
      return Or().getRemoteConfig(a);
    },
    Wr = function () {
      var a = P.aa;
      return Or().getGlobalConfigValue && Or().getGlobalConfigValue(a);
    },
    Xr = {},
    Yr = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.o = {};
      this.B = null;
      this.claimed = this.g = !1;
    },
    Zr = function (a, b, c, d, e) {
      this.type = a;
      this.o = b;
      this.V = c || "";
      this.g = d;
      this.messageContext = e;
    },
    Pr = function () {
      this.o = {};
      this.B = {};
      this.g = [];
      this.C = { AW: !1, UA: !1 };
    },
    $r = function (a, b) {
      var c = Nl(b);
      return (a.o[c.containerId] = a.o[c.containerId] || new Yr());
    },
    as = function (a, b, c, d) {
      if (b) {
        var e = Nl(b);
        if (e && 1 === $r(a, b).status) {
          $r(a, b).status = 2;
          var f = {};
          Nn &&
            (f.timeoutId = z.setTimeout(function () {
              ig(38);
              qn();
            }, 3e3));
          a.push("require", [f], e.containerId, {});
          Xr[e.containerId] = Ra();
          if (pj()) {
          } else 2 === d ? ap(e.containerId, c) : $o(e.containerId, c, !0);
        }
      }
    },
    bs = function (a, b, c, d) {
      if (d.V) {
        var e = $r(a, d.V),
          f = e.B;
        if (f) {
          var g = mc(c),
            h = mc(e.targetConfig[d.V]),
            k = mc(e.containerConfig),
            n = mc(e.remoteConfig),
            p = mc(a.B),
            q = {};
          try {
            q = mc(Xg);
          } catch (v) {
            ig(72);
          }
          var r = Nl(d.V).prefix,
            t = function (v) {
              $n(d.messageContext.eventId, r, v);
              var x = g[P.Yb];
              x && J(x);
            },
            u = Pp(
              Op(
                Qp(
                  Np(
                    Mp(
                      Kp(
                        Jp(
                          Lp(
                            Ip(
                              Hp(
                                Gp(
                                  new Fp(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                h
                              ),
                              k
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                    }
                  }
                ),
                function (v, x) {
                  a.C[v] = x;
                }
              ),
              function (v) {
                return a.C[v];
              }
            );
          try {
            $n(d.messageContext.eventId, r, "1"), lo(d.type, d.V, u);
            f(d.V, b, d.o, u);
          } catch (v) {
            $n(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  l = Pr.prototype;
  l.register = function (a, b, c) {
    var d = $r(this, a);
    if (3 !== d.status) {
      d.B = b;
      d.status = 3;
      c && (mc(d.remoteConfig, c), (d.remoteConfig = c));
      var e = Nl(a),
        f = Xr[e.containerId];
      if (void 0 !== f) {
        var g = S[e.containerId].bootstrap,
          h = e.prefix.toUpperCase();
        S[e.containerId]._spx && (h = h.toLowerCase());
        var k = $g("gtm.uniqueEventId"),
          n = h,
          p = Ra() - g;
        if (Nn && !un[k]) {
          k !== Xm && (mn(), (Xm = k));
          var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
          Bn = Bn ? Bn + "," + q : "&cl=" + q;
        }
        delete Xr[e.containerId];
      }
      this.flush();
    }
  };
  l.notifyContainerLoaded = function (a, b) {
    var c = this,
      d = function (f) {
        if (Nl(f)) {
          var g = $r(c, f);
          g.status = 3;
          g.claimed = !0;
        }
      };
    d(a);
    for (var e = 0; e < b.length; e++) d(b[e]);
    this.flush();
  };
  l.push = function (a, b, c, d) {
    null == d ? (d = {}) : "boolean" === typeof d && (d = { deferrable: d });
    if (void 0 !== c) {
      if (!Nl(c)) return;
      as(this, c, b[0][P.aa] || this.B[P.aa], "event" === a ? 2 : 1);
      $r(this, c).g && (d.deferrable = !1);
    }
    this.g.push(new Zr(a, Math.floor(Ra() / 1e3), c, b, d));
    d.deferrable || this.flush();
  };
  l.insert = function (a, b, c, d) {
    null == d && (d = {});
    var e = Math.floor(Ra() / 1e3);
    0 < this.g.length
      ? this.g.splice(1, 0, new Zr(a, e, c, b, d))
      : this.g.push(new Zr(a, e, c, b, d));
  };
  l.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.g.length; ) {
      var f = this.g[0];
      if (f.messageContext.deferrable)
        !f.V || $r(this, f.V).g
          ? ((f.messageContext.deferrable = !1), this.g.push(f))
          : c.push(f),
          this.g.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = $r(this, f.V);
            if (3 !== g.status && !a) {
              this.g.push.apply(this.g, c);
              return;
            }
            Nn && z.clearTimeout(f.g[0].timeoutId);
            break;
          case "set":
            Ka(f.g[0], function (r, t) {
              mc(Za(r, t), b.B);
            });
            break;
          case "config":
            g = $r(this, f.V);
            if (g.claimed) break;
            e.eb = {};
            Ka(
              f.g[0],
              (function (r) {
                return function (t, u) {
                  mc(Za(t, u), r.eb);
                };
              })(e)
            );
            var h = !!e.eb[P.Nd];
            delete e.eb[P.Nd];
            var k = Nl(f.V),
              n = k.containerId === k.id;
            h || (n ? (g.containerConfig = {}) : (g.targetConfig[f.V] = {}));
            (g.g && h) || bs(this, P.Ma, e.eb, f);
            g.g = !0;
            n
              ? mc(e.eb, g.containerConfig)
              : (mc(e.eb, g.targetConfig[f.V]), ig(70));
            d = !0;
            break;
          case "event":
            g = $r(this, f.V);
            if (g.claimed) break;
            e.nd = {};
            Ka(
              f.g[0],
              (function (r) {
                return function (t, u) {
                  mc(Za(t, u), r.nd);
                };
              })(e)
            );
            bs(this, f.g[1], e.nd, f);
            break;
          case "get":
            if (((g = $r(this, f.V)), !g.claimed)) {
              var p = {},
                q = ((p[P.Ya] = f.g[0]), (p[P.kb] = f.g[1]), p);
              bs(this, P.Ua, q, f);
            }
        }
        this.g.shift();
        cs(this, f);
      }
      e = { eb: e.eb, nd: e.nd };
    }
    this.g.push.apply(this.g, c);
    d && this.flush();
  };
  var cs = function (a, b) {
    if ("require" !== b.type)
      if (b.V)
        for (
          var c = a.getCommandListeners(b.V)[b.type] || [], d = 0;
          d < c.length;
          d++
        )
          c[d]();
      else
        for (var e in a.o)
          if (a.o.hasOwnProperty(e)) {
            var f = a.o[e];
            if (f && f.o)
              for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]();
          }
  };
  Pr.prototype.getRemoteConfig = function (a) {
    return $r(this, a).remoteConfig;
  };
  Pr.prototype.getCommandListeners = function (a) {
    return $r(this, a).o;
  };
  Pr.prototype.getGlobalConfigValue = function (a) {
    return this.B[a];
  };
  var Ke;
  var ds = !1;
  var es = !1;
  var fs = {},
    gs = {},
    hs = {},
    is = function (a, b) {
      var c = gs[b] || [];
      c.push(a);
      gs[b] = c;
    },
    ks = function () {
      S.addTargetToGroup = function (e) {
        js(e, "default");
      };
      S.addDestinationToContainer = function (e, f) {
        is(e, f);
      };
      var a = S.pendingDefaultTargets;
      delete S.pendingDefaultTargets;
      if (Array.isArray(a))
        for (var b = 0; b < a.length; ++b) js(a[b], "default");
      var c = S.pendingDestinationIds;
      delete S.pendingDestinationIds;
      if (Array.isArray(c))
        for (var d = 0; d < c.length; ++d) is(c[d][0], c[d][1]);
    },
    js = function (a, b) {
      b = b.toString().split(",");
      for (var c = 0; c < b.length; c++) {
        var d = fs[b[c]] || [];
        fs[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    ls = function (a, b) {
      b = String(b).split(",");
      for (var c = 0; c < b.length; c++) {
        var d = hs[b[c]] || [];
        hs[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    ms = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { wc: d.wc, pd: d.pd }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf("-"))
          if (es) {
            if (((d.wc = Nl(f)), d.wc))
              if (ds) {
                var g = sj();
                Fa(
                  g,
                  (function (u) {
                    return function (v) {
                      return u.wc.containerId === v;
                    };
                  })(d)
                )
                  ? b.push(f)
                  : c.push(f);
              } else d.wc.containerId === Ge.J || pj() ? b.push(f) : c.push(f);
          } else b.push(f);
        else {
          var h = fs[f] || [];
          if (es)
            if (ds) {
              d.pd = {};
              h.forEach(
                (function (u) {
                  return function (v) {
                    return (u.pd[v] = !0);
                  };
                })(d)
              );
              for (var k = rj(), n = 0; n < k.length; n++)
                if (d.pd[k[n]]) {
                  var p = sj();
                  p && p.length && (b = b.concat(p));
                  break;
                }
              var q = hs[f] || [];
              q.length && (b = b.concat(q));
            } else
              for (var r = 0; r < h.length; r++) {
                var t = Nl(h[r]);
                ((t && t.containerId === Ge.J) || pj()) && b.push(t.id);
              }
          else h && h.length && (b = b.concat(h));
        }
      }
      return { Ij: b, Lj: c };
    },
    ns = function (a) {
      Ka(fs, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    os = function (a) {
      Ka(hs, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var ps = !1;
  var qs = "HA GF G UA AW DC".split(" "),
    rs = !1,
    ss = !1,
    ts = !1;
  function us(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Ug() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  function vs() {
    if (Nr) return !1;
    rs || S.gtagRegistered || ((rs = S.gtagRegistered = !0), ks());
    return rs;
  }
  var ws = {
      config: function (a, b) {
        var c = us(a, b);
        if (2 > a.length || !m(a[1])) return;
        var d = {};
        if (2 < a.length) {
          if ((void 0 != a[2] && !lc(a[2])) || 3 < a.length) return;
          d = a[2];
        }
        var e = Nl(a[1]);
        if (!e) return;
        Sn(c.eventId, "gtag.config");
        var f = e.id !== e.containerId,
          g = !1,
          h = -1 !== rj().indexOf(e.containerId);
        h && ((g = ts), (ts = !0));
        if (jm[12] && Pg && !f && g) return;
        if (Nr) {
          var k = d[P.aa] || Wr();
          if (ps && f) {
            if (
              !Fa(sj(), function (x) {
                return x === e.containerId;
              })
            ) {
              ap(e.containerId, k);
              return;
            }
          } else if (!h && !pj()) {
            $o(e.containerId, k, !0);
            return;
          }
        }
        var n = vs() || Nr;
        b.noTargetGroup ||
          (ps && f
            ? (os(e.id), ls(e.id, d[P.Hd] || "default"))
            : (ns(e.id), js(e.id, d[P.Hd] || "default")));
        delete d[P.Hd];
        ss || ig(43);
        if (n) {
          var p = [e.id];
          ps && !f && (p = sj());
          for (var q = !1, r = 0; r < p.length; r++) {
            var t = Nl(p[r]),
              u = mc(b);
            if (t && -1 !== qs.indexOf(t.prefix)) {
              var v = u.eventMetadata || {};
              v.hasOwnProperty("is_external_event") ||
                (v.is_external_event = !u.fromContainerExecution);
              u.eventMetadata = v;
              delete d[P.Yb];
              Tr(d, t.id, u);
              q = !0;
            }
          }
          if (q) return;
        }
        ch("gtag.targets." + e.id);
        ch("gtag.targets." + e.id, mc(d));
      },
      consent: function (a, b) {
        if (3 === a.length) {
          ig(39);
          var c = us(a, b),
            d = a[1];
          "default" === d ? Ii(a[2]) : "update" === d && Ki(a[2], c);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && m(c)) {
          var d;
          if (2 < a.length) {
            if ((!lc(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = mc(e)),
            e[P.Yb] && (g.eventCallback = e[P.Yb]),
            e[P.Ed] && (g.eventTimeout = e[P.Ed]));
          var h = us(a, b),
            k = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = k;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[P.Bb];
          void 0 === r && ((r = $g(P.Bb, 2)), void 0 === r && (r = "default"));
          if (m(r) || Ea(r)) {
            var t = r.toString().replace(/\s+/g, "").split(","),
              u = ms(t),
              v = u.Ij,
              x = u.Lj;
            if (x.length)
              for (var y = (q && q[P.aa]) || Wr(), w = 0; w < x.length; w++) {
                var A = Nl(x[w]);
                A && (ps ? ap(A.containerId, y) : $o(A.containerId, y, !0));
              }
            p = Pl(v);
          } else p = void 0;
          var B = p;
          if (!B) return;
          Sn(k, c);
          for (var C = vs() || Nr, E = [], F = 0; C && F < B.length; F++) {
            var D = B[F],
              O = mc(b);
            if (-1 !== qs.indexOf(D.prefix)) {
              var N = mc(d),
                R = O.eventMetadata || {};
              R.hasOwnProperty("is_external_event") ||
                (R.is_external_event = !O.fromContainerExecution);
              O.eventMetadata = R;
              delete N[P.Yb];
              Rr(c, N, D.id, O);
            }
            E.push(D.id);
          }
          g.eventModel = g.eventModel || {};
          0 < B.length
            ? (g.eventModel[P.Bb] = E.join())
            : delete g.eventModel[P.Bb];
          ss || ig(43);
          return b.noGtmEvent ? void 0 : g;
        }
      },
      get: function (a, b) {
        ig(53);
        if (4 !== a.length || !m(a[1]) || !m(a[2]) || !Ca(a[3])) return;
        var c = Nl(a[1]),
          d = String(a[2]),
          e = a[3];
        if (!c) return;
        ss || ig(43);
        if (Nr) {
          var f = Wr();
          if (ps) {
            if (
              !Fa(sj(), function (h) {
                return c.containerId === h;
              })
            ) {
              ap(c.containerId, f);
              return;
            }
          } else if (c.containerId !== Ge.J && !pj()) {
            $o(c.containerId, f, !0);
            return;
          }
        } else if (!vs()) return;
        if (-1 === qs.indexOf(c.prefix)) return;
        us(a, b);
        var g = {};
        Ei(mc(((g[P.Ya] = d), (g[P.kb] = e), g)));
        Ur(
          d,
          function (h) {
            J(function () {
              return e(h);
            });
          },
          c.id,
          b
        );
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          ss = !0;
          vs();
          var c = us(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && m(a[1]) && Ca(a[2])) {
          var b = a[1],
            c = a[2],
            d = Ke.o;
          d.g[b] ? d.g[b].push(c) : (d.g[b] = [c]);
          if ((ig(74), "all" === a[1])) {
            ig(75);
            var e = !1;
            try {
              e = a[2](Ge.J, "unknown", {});
            } catch (f) {}
            e || ig(76);
          }
        } else {
          ig(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && lc(a[1])
          ? (c = mc(a[1]))
          : 3 == a.length &&
            m(a[1]) &&
            ((c = {}),
            lc(a[2]) || Ea(a[2]) ? (c[a[1]] = mc(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = us(a, b),
            e = d.eventId,
            f = d.priorityId;
          mc(c);
          if (vs() || Nr) {
            var g = mc(c);
            Or().push("set", [g], void 0, b);
          }
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    xs = { policy: !0 };
  var ys = function (a) {
      var b = z[Hg.fa].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    zs = function (a) {
      var b = z[Hg.fa],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var As = !1,
    Bs = [];
  function Cs() {
    if (!As) {
      As = !0;
      for (var a = 0; a < Bs.length; a++) J(Bs[a]);
    }
  }
  var Ds = function (a) {
    As ? J(a) : Bs.push(a);
  };
  var Us = function (a) {
    if (Ts(a)) return a;
    this.g = a;
  };
  Us.prototype.getUntrustedMessageValue = function () {
    return this.g;
  };
  var Ts = function (a) {
    return !a || "object" !== jc(a) || lc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  Us.prototype.getUntrustedMessageValue = Us.prototype.getUntrustedMessageValue;
  var Vs = 0,
    Ws = {},
    Xs = [],
    Ys = [],
    Zs = !1,
    $s = !1;
  function at(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var bt = function (a) {
      return z[Hg.fa].push(a);
    },
    ct = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return bt(a);
    },
    dt = function (a, b) {
      var c = S[Hg.fa],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = z.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (z.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function et(a, b) {
    var c = (!!jm[10] && a._clear) || b.overwriteModelFields;
    Ka(a, function (e, f) {
      "_clear" !== e && (c && ch(e), ch(e, f));
    });
    Qg || (Qg = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Ug()), (a["gtm.uniqueEventId"] = d), ch("gtm.uniqueEventId", d));
    return Ep(a);
  }
  function ft(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (La(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function It() {
    var a;
    if (Ys.length) a = Ys.shift();
    else if (Xs.length) a = Xs.shift();
    else return;
    var b;
    var c = a;
    if (Zs || !ft(c.message)) b = c;
    else {
      Zs = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ug());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      Xs.unshift(h, c);
      b = f;
    }
    return b;
  }
  function Jt() {
    for (var a = !1, b; !$s && (b = It()); ) {
      $s = !0;
      delete Xg.eventModel;
      Zg();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) $s = !1;
      else {
        e.fromContainerExecution && dh();
        try {
          if (Ca(d))
            try {
              d.call(ah);
            } catch (v) {}
          else if (Ea(d)) {
            var f = d;
            if (m(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                k = f.slice(1),
                n = $g(g.join("."), 2);
              if (null != n)
                try {
                  n[h].apply(n, k);
                } catch (v) {}
            }
          } else {
            var p = void 0;
            if (La(d))
              a: {
                if (d.length && m(d[0])) {
                  var q = ws[d[0]];
                  if (q && (!e.fromContainerExecution || !xs[d[0]])) {
                    p = q(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
            else p = d;
            p && (a = et(p, e) || a);
          }
        } finally {
          e.fromContainerExecution && Zg(!0);
          var r = d["gtm.uniqueEventId"];
          if ("number" === typeof r) {
            for (var t = Ws[String(r)] || [], u = 0; u < t.length; u++)
              Ys.push(Kt(t[u]));
            t.length && Ys.sort(at);
            delete Ws[String(r)];
            Vs = r;
          }
          $s = !1;
        }
      }
    }
    return !a;
  }
  function Lt() {
    var b = Jt();
    try {
      ys(Ge.J);
    } catch (c) {}
    return b;
  }
  function ip(a) {
    if (Vs < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Ws[b] = Ws[b] || [];
      Ws[b].push(a);
    } else
      Ys.push(Kt(a)),
        Ys.sort(at),
        J(function () {
          $s || Jt();
        });
  }
  function Kt(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Nt = function () {
      function a(f) {
        var g = {};
        if (Ts(f)) {
          var h = f;
          f = Ts(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = Gb(Hg.fa, []),
        c = (S[Hg.fa] = S[Hg.fa] || {});
      !0 === c.pruned && ig(83);
      Ws = gp().get();
      jp();
      so(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      Ds(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        function f(r) {
          if (jm[18]) {
            var t = r["gtm.uniqueEventId"],
              u = [r];
            "number" === typeof t &&
              u.push.apply(
                u,
                ((gp().prune && gp().prune(t)) || []).map(function (A) {
                  return A.message;
                })
              );
            for (var v = 0; v < u.length; v++) {
              var x = u[v];
              if (La(x) && "set" === x[0]) {
                var y = void 0;
                if (2 == x.length && lc(x[1])) y = x[1];
                else if (3 == x.length && m(x[1])) {
                  var w = {};
                  y = ((w[x[1]] = x[2]), w);
                } else continue;
                c.pageConfig = c.pageConfig || {};
                Ka(y, function (A, B) {
                  mc(Za(A, B), c.pageConfig);
                });
              }
            }
          }
        }
        var g;
        if (0 < S.SANDBOXED_JS_SEMAPHORE) {
          g = [];
          for (var h = 0; h < arguments.length; h++)
            g[h] = new Us(arguments[h]);
        } else g = [].slice.call(arguments, 0);
        var k = g.map(function (r) {
          return a(r);
        });
        Xs.push.apply(Xs, k);
        var n = d.apply(b, g),
          p = 300;
        jm[16] && (p = Math.max(100, Number("1000") || p));
        if (this.length > p)
          for (ig(4), c.pruned = !0; this.length > p; ) f(this.shift());
        var q = "boolean" !== typeof n || n;
        return Jt() && q;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      jm[18] &&
        c.pageConfig &&
        e.unshift({ message: cp(mc(c.pageConfig)), messageContext: {} });
      Xs.push.apply(Xs, e);
      if (Mt()) {
        J(Lt);
      }
    },
    Mt = function () {
      var a = !0;
      return a;
    };
  function Ot(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ra();
    return b < c + 3e5 && b > c - 9e5;
  }
  var Pt = {};
  Pt.Od = new String("undefined");
  var St = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Xb(a, "className"),
        "gtm.elementId": a["for"] || Sb(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Xb(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Xb(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    Tt = function (a) {
      S.hasOwnProperty("autoEventsSettings") || (S.autoEventsSettings = {});
      var b = S.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Ut = function (a, b, c) {
      Tt(a)[b] = c;
    },
    Vt = function (a, b, c, d) {
      var e = Tt(a),
        f = Sa(e, b, d);
      e[b] = c(f);
    },
    Wt = function (a, b, c) {
      var d = Tt(a);
      return Sa(d, b, c);
    },
    Xt = function (a) {
      return "string" === typeof a ? a : String(Ug());
    };
  var qu = z.clearTimeout,
    ru = z.setTimeout,
    U = function (a, b, c, d) {
      if (pj()) {
        b && J(b);
      } else return Lb(a, b, c, d);
    },
    su = function () {
      return new Date();
    },
    tu = function () {
      return z.location.href;
    },
    uu = function (a) {
      return wh(yh(a), "fragment");
    },
    vu = function (a) {
      return xh(yh(a));
    },
    wu = function (a, b) {
      return $g(a, b || 2);
    },
    xu = function (a, b, c) {
      return b ? ct(a, b, c) : bt(a);
    },
    yu = function (a, b) {
      z[a] = b;
    },
    V = function (a, b, c) {
      b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
      return z[a];
    },
    zu = function (a, b, c) {
      return Xi(a, b, void 0 === c ? !0 : !!c);
    },
    Au = function (a, b, c) {
      return 0 === fj(a, b, c);
    },
    Bu = function (a, b) {
      if (pj()) {
        b && J(b);
      } else Ob(a, b);
    },
    Cu = function (a) {
      return !!Wt(a, "init", !1);
    },
    Du = function (a) {
      Ut(a, "init", !0);
    },
    Eu = function (a, b, c) {
      Nn && (rc(a) || ao(c, b, a));
    };
  var bv = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function cv(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var dv = new Ha();
  function ev(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = dv.get(e);
      f || ((f = new RegExp(b, d)), dv.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function fv(a, b) {
    function c(g) {
      var h = yh(g),
        k = wh(h, "protocol"),
        n = wh(h, "host", !0),
        p = wh(h, "port"),
        q = wh(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === k ||
        ("http" === k && "80" === p) ||
        ("https" === k && "443" === p)
      )
        (k = "web"), (p = "default");
      return [k, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function gv(a) {
    return hv(a) ? 1 : 0;
  }
  function hv(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = mc(a, {});
        mc({ arg1: c[d], any_of: void 0 }, e);
        if (gv(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < bv.length; g++) {
                var h = bv[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (k) {}
          f = !1;
        }
        return f;
      case "_ew":
        return cv(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return ev(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return fv(b, c);
    }
    return !1;
  }
  function iv(a, b) {
    var c = this;
  }
  iv.M = "addConsentListener";
  var jv;
  var kv = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (jv)
        try {
          a[b]();
        } catch (c) {
          ig(77);
        }
      else a[b]();
  };
  function lv(a, b, c) {
    var d = this,
      e;
    L(
      H(this),
      ["eventName:!string", "callback:!Fn", "triggerId:?string"],
      arguments
    ),
      kv([
        function () {
          return M(d, "listen_data_layer", a);
        },
      ]),
      (e = zp().o(a, oc(b), c));
    return e;
  }
  lv.N = "internal.addDataLayerEventListener";
  function mv(a, b, c) {}
  mv.M = "addDocumentEventListener";
  function nv(a, b, c, d) {}
  nv.M = "addElementEventListener";
  function ov(a) {}
  ov.M = "addEventCallback";
  function sv(a) {}
  sv.N = "internal.addFormAbandonmentListener";
  var tv = {},
    uv = [],
    vv = {},
    wv = 0,
    xv = 0;
  function Ev(a, b) {}
  Ev.N = "internal.addFormInteractionListener";
  function Lv(a, b) {}
  Lv.N = "internal.addFormSubmitListener";
  function Qv(a) {}
  Qv.N = "internal.addGaSendListener";
  var Rv = {},
    Sv = [];
  var Zv = function (a, b) {};
  Zv.N = "internal.addHistoryChangeListener";
  function $v(a, b, c) {}
  $v.M = "addWindowEventListener";
  function aw(a, b) {
    return !0;
  }
  aw.M = "aliasInWindow";
  function bw(a, b, c) {}
  bw.N = "internal.appendRemoteConfigParameter";
  function cw() {
    var a = 2;
    return a;
  }
  function dw(a, b) {
    var c;
    return c;
  }
  dw.M = "callInWindow";
  function ew(a) {}
  ew.M = "callLater";
  function fw(a) {}
  fw.N = "callOnDomReady";
  function gw(a) {
    L(H(this), ["listener:!Fn"], arguments);
    M(this, "process_dom_events", "window", "load");
    Ds(oc(a));
  }
  gw.N = "callOnWindowLoad";
  function hw(a) {
    var b;
    return b;
  }
  hw.N = "internal.computeGtmParameter";
  function iw(a, b) {
    var c;
    var d = nc(c, this.g, cw());
    void 0 === d && void 0 !== c && ig(45);
    return d;
  }
  iw.M = "copyFromDataLayer";
  function jw(a) {
    var b;
    return b;
  }
  jw.M = "copyFromWindow";
  function kw(a, b) {
    var c;
    return c;
  }
  kw.N = "internal.copyPreHit";
  function lw(a, b) {
    var c = null,
      d = cw();
    return nc(c, this.g, d);
  }
  lw.M = "createArgumentsQueue";
  function mw(a) {
    var b;
    return nc(b, this.g, cw());
  }
  mw.M = "createQueue";
  var nw = {},
    ow = [],
    pw = {},
    qw = 0,
    rw = 0;
  function xw(a, b) {
    var c = this;
    return b;
  }
  xw.N = "internal.enableAutoEventOnFormInteraction";
  function Cw(a, b) {
    var c = this;
    return b;
  }
  Cw.N = "internal.enableAutoEventOnFormSubmit";
  function Hw() {
    var a = this;
  }
  Hw.N = "internal.enableAutoEventOnGaSend";
  var Iw = {},
    Jw = [];
  var Lw = function (a, b) {
      var c = "" + b;
      if (Iw[c]) Iw[c].push(a);
      else {
        var d = [a];
        Iw[c] = d;
        var e = Kw(),
          f = -1;
        Jw.push(function (g) {
          0 <= f && z.clearTimeout(f);
          b
            ? (f = z.setTimeout(function () {
                e(g, d);
                f = -1;
              }, b))
            : e(g, d);
        });
      }
    },
    Kw = function () {
      var a = z.location.href,
        b = {
          source: null,
          state: z.history.state || null,
          url: xh(yh(a)),
          O: wh(yh(a), "fragment"),
        };
      return function (c, d) {
        var e = b,
          f = {};
        f[e.source] = !0;
        f[c.source] = !0;
        if (!f.popstate || !f.hashchange || e.O != c.O) {
          var g = {},
            h =
              ((g.event = "gtm.historyChange-v2"),
              (g["gtm.historyChangeSource"] = c.source),
              (g["gtm.oldUrlFragment"] = b.O),
              (g["gtm.newUrlFragment"] = c.O),
              (g["gtm.oldHistoryState"] = b.state),
              (g["gtm.newHistoryState"] = c.state),
              (g["gtm.oldUrl"] = b.url),
              (g["gtm.newUrl"] = c.url),
              (g["gtm.triggers"] = d.join(",")),
              g);
          b = c;
          bt(h);
        }
      };
    },
    Mw = function (a, b) {
      var c = z.history,
        d = c[a];
      if (Ca(d))
        try {
          c[a] = function (e, f, g) {
            d.apply(c, [].slice.call(arguments, 0));
            var h = z.location.href;
            b({
              source: a,
              state: e,
              url: xh(yh(h)),
              O: wh(yh(h), "fragment"),
            });
          };
        } catch (e) {}
    },
    Ow = function (a) {
      z.addEventListener("popstate", function (b) {
        var c = Nw(b);
        a({
          source: "popstate",
          state: b.state,
          url: xh(yh(c)),
          O: wh(yh(c), "fragment"),
        });
      });
    },
    Pw = function (a) {
      z.addEventListener("hashchange", function (b) {
        var c = Nw(b);
        a({
          source: "hashchange",
          state: null,
          url: xh(yh(c)),
          O: wh(yh(c), "fragment"),
        });
      });
    },
    Nw = function (a) {
      return a.target && a.target.location && a.target.location.href
        ? a.target.location.href
        : z.location.href;
    };
  function Qw(a, b) {
    var c = this;
    L(H(this), ["options:?DustMap", "triggerId:?*"], arguments);
    kv([
      function () {
        return M(c, "process_dom_events", "window", "popstate");
      },
      function () {
        return M(c, "process_dom_events", "window", "pushstate");
      },
    ]);
    b = Xt(b);
    var d = Number(a && a.get("interval"));
    (0 < d && isFinite(d)) || (d = 0);
    if (Wt("ehl", "init", !1)) {
      var e = Wt("ehl", "reg");
      e && e(b, d);
    } else {
      var f = function (g) {
        for (var h = 0; h < Jw.length; h++) Jw[h](g);
      };
      Pw(f);
      Ow(f);
      Mw("pushState", f);
      Mw("replaceState", f);
      Lw(b, d);
      Ut("ehl", "reg", Lw);
      Ut("ehl", "init", !0);
    }
    return b;
  }
  Qw.N = "internal.enableAutoEventOnHistoryChange";
  var Rw = function (a, b) {
      if (2 === a.which || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
        return !1;
      var c = Xb(b, "href"),
        d = c.indexOf("#"),
        e = Xb(b, "target");
      if ((e && "_self" !== e && "_parent" !== e && "_top" !== e) || 0 === d)
        return !1;
      if (0 < d) {
        var f = xh(yh(c)),
          g = xh(yh(z.location.href));
        return f !== g;
      }
      return !0;
    },
    Sw = function (a, b) {
      for (
        var c = wh(
            yh(
              (b.attributes && b.attributes.formaction ? b.formAction : "") ||
                b.action ||
                Xb(b, "href") ||
                b.src ||
                b.code ||
                b.codebase ||
                ""
            ),
            "host"
          ),
          d = 0;
        d < a.length;
        d++
      )
        try {
          if (new RegExp(a[d]).test(c)) return !1;
        } catch (e) {}
      return !0;
    },
    Tw = function () {
      var a = 0,
        b = function (c) {
          var d = c.target;
          if (
            d &&
            3 !== c.which &&
            !(c.Ef || (c.timeStamp && c.timeStamp === a))
          ) {
            a = c.timeStamp;
            d = Vb(d, ["a", "area"], 100);
            if (!d) return c.returnValue;
            var e = c.defaultPrevented || !1 === c.returnValue,
              f = Wt("aelc", e ? "nv.mwt" : "mwt", 0),
              g;
            g = e ? Wt("aelc", "nv.ids", []) : Wt("aelc", "ids", []);
            for (var h = [], k = 0; k < g.length; k++) {
              var n = g[k],
                p = Wt("aelc", "aff.map", {})[n];
              (p && !Sw(p, d)) || h.push(n);
            }
            if (h.length) {
              var q = Rw(c, d),
                r = St(d, "gtm.linkClick", h);
              r["gtm.elementText"] = Tb(d);
              r["gtm.willOpenInNewWindow"] = !q;
              if (q && !e && f && d.href) {
                var t = !!Fa(String(Xb(d, "rel") || "").split(" "), function (
                  y
                ) {
                  return "noreferrer" === y.toLowerCase();
                });
                t && ig(36);
                var u = z[(Xb(d, "target") || "_self").substring(1)],
                  v = !0,
                  x = dt(function () {
                    var y;
                    if ((y = v && u)) {
                      var w;
                      a: if (t) {
                        var A;
                        try {
                          A = new MouseEvent(c.type, { bubbles: !0 });
                        } catch (B) {
                          if (!I.createEvent) {
                            w = !1;
                            break a;
                          }
                          A = I.createEvent("MouseEvents");
                          A.initEvent(c.type, !0, !0);
                        }
                        A.Ef = !0;
                        c.target.dispatchEvent(A);
                        w = !0;
                      } else w = !1;
                      y = !w;
                    }
                    y && (u.location.href = Xb(d, "href"));
                  }, f);
                if (ct(r, x, f)) v = !1;
                else
                  return (
                    c.preventDefault && c.preventDefault(), (c.returnValue = !1)
                  );
              } else ct(r, function () {}, f || 2e3);
              return !0;
            }
          }
        };
      Qb(I, "click", b, !1);
      Qb(I, "auxclick", b, !1);
    };
  function Uw(a, b) {
    var c = this;
    L(H(this), ["dustOptions:?DustMap", "triggerId:?*"], arguments);
    kv([
      function () {
        return M(c, "process_dom_events", "document", "click");
      },
      function () {
        return M(c, "process_dom_events", "document", "auxclick");
      },
    ]);
    var d = oc(a),
      e = d && !!d.waitForTags,
      f = d && !!d.checkValidation,
      g = d ? d.affiliateDomains : void 0;
    b = Xt(b);
    if (e) {
      var h = Number(d.waitForTagsTimeout);
      (0 < h && isFinite(h)) || (h = 2e3);
      var k = function (p) {
        return Math.max(h, p);
      };
      Vt("aelc", "mwt", k, 0);
      f || Vt("aelc", "nv.mwt", k, 0);
    }
    var n = function (p) {
      p.push(b);
      return p;
    };
    Vt("aelc", "ids", n, []);
    f || Vt("aelc", "nv.ids", n, []);
    g &&
      Vt(
        "aelc",
        "aff.map",
        function (p) {
          p[b] = g;
          return p;
        },
        {}
      );
    Wt("aelc", "init", !1) || (Tw(), Ut("aelc", "init", !0));
    return b;
  }
  Uw.N = "internal.enableAutoEventOnLinkClick";
  var Vw, Ww;
  var Xw = function (a) {
      return Wt("sdl", a, {});
    },
    Yw = function (a, b, c) {
      b &&
        (Array.isArray(a) || (a = [a]),
        Vt(
          "sdl",
          c,
          function (d) {
            for (var e = 0; e < a.length; e++) {
              var f = String(a[e]);
              d.hasOwnProperty(f) || (d[f] = []);
              d[f].push(b);
            }
            return d;
          },
          {}
        ));
    },
    ax = function () {
      var a = 250,
        b = !1;
      I.scrollingElement &&
        I.documentElement &&
        z.addEventListener &&
        ((a = 50), (b = !0));
      var c = 0,
        d = !1,
        e = function () {
          d
            ? (c = z.setTimeout(e, a))
            : ((c = 0),
              Zw(),
              Wt("sdl", "init", !1) &&
                !$w() &&
                (Rb(z, "scroll", f),
                Rb(z, "resize", f),
                Ut("sdl", "init", !1)));
          d = !1;
        },
        f = function () {
          b && Vw();
          c ? (d = !0) : ((c = z.setTimeout(e, a)), Ut("sdl", "pending", !0));
        };
      return f;
    },
    Zw = function () {
      var a = Vw(),
        b = a.sf,
        c = a.tf,
        d = (b / Ww.scrollWidth) * 100,
        e = (c / Ww.scrollHeight) * 100;
      bx(b, "horiz.pix", "PIXELS", "horizontal");
      bx(d, "horiz.pct", "PERCENT", "horizontal");
      bx(c, "vert.pix", "PIXELS", "vertical");
      bx(e, "vert.pct", "PERCENT", "vertical");
      Ut("sdl", "pending", !1);
    },
    bx = function (a, b, c, d) {
      var e = Xw(b),
        f = {},
        g;
      for (g in e) {
        f.Qb = g;
        if (e.hasOwnProperty(f.Qb)) {
          var h = Number(f.Qb);
          if (!(a < h)) {
            var k = {};
            bt(
              ((k.event = "gtm.scrollDepth"),
              (k["gtm.scrollThreshold"] = h),
              (k["gtm.scrollUnits"] = c.toLowerCase()),
              (k["gtm.scrollDirection"] = d),
              (k["gtm.triggers"] = e[f.Qb].join(",")),
              k)
            );
            Vt(
              "sdl",
              b,
              (function (n) {
                return function (p) {
                  delete p[n.Qb];
                  return p;
                };
              })(f),
              {}
            );
          }
        }
        f = { Qb: f.Qb };
      }
    },
    dx = function () {
      Vt(
        "sdl",
        "scr",
        function (a) {
          a || (a = I.scrollingElement || (I.body && I.body.parentNode));
          return (Ww = a);
        },
        !1
      );
      Vt(
        "sdl",
        "depth",
        function (a) {
          a || (a = cx());
          return (Vw = a);
        },
        !1
      );
    },
    cx = function () {
      var a = 0,
        b = 0;
      return function () {
        var c = kh(),
          d = c.height;
        a = Math.max(Ww.scrollLeft + c.width, a);
        b = Math.max(Ww.scrollTop + d, b);
        return { sf: a, tf: b };
      };
    },
    $w = function () {
      return !!(
        Object.keys(Xw("horiz.pix")).length ||
        Object.keys(Xw("horiz.pct")).length ||
        Object.keys(Xw("vert.pix")).length ||
        Object.keys(Xw("vert.pct")).length
      );
    };
  function ex(a, b) {
    var c = this;
    L(H(this), ["options:!DustMap", "triggerId:?*"], arguments);
    kv([
      function () {
        return M(c, "process_dom_events", "window", "resize");
      },
      function () {
        return M(c, "process_dom_events", "window", "scroll");
      },
    ]);
    dx();
    if (!Ww) return;
    b = Xt(b);
    var d = oc(a);
    switch (d.horizontalThresholdUnits) {
      case "PIXELS":
        Yw(d.horizontalThresholds, b, "horiz.pix");
        break;
      case "PERCENT":
        Yw(d.horizontalThresholds, b, "horiz.pct");
    }
    switch (d.verticalThresholdUnits) {
      case "PIXELS":
        Yw(d.verticalThresholds, b, "vert.pix");
        break;
      case "PERCENT":
        Yw(d.verticalThresholds, b, "vert.pct");
    }
    Wt("sdl", "init", !1)
      ? Wt("sdl", "pending", !1) ||
        J(function () {
          return Zw();
        })
      : (Ut("sdl", "init", !0),
        Ut("sdl", "pending", !0),
        J(function () {
          Zw();
          if ($w()) {
            var e = ax();
            Qb(z, "scroll", e);
            Qb(z, "resize", e);
          } else Ut("sdl", "init", !1);
        }));
    return b;
  }
  ex.N = "internal.enableAutoEventOnScroll";
  var Cb = ca(["data-gtm-yt-inspected-"]),
    fx = ["www.youtube.com", "www.youtube-nocookie.com"],
    gx,
    hx = !1;
  function rx(a, b) {
    var c = this;
    return b;
  }
  rx.N = "internal.enableAutoEventOnYouTubeActivity";
  function sx(a) {
    return !1;
  }
  sx.N = "internal.evaluateFilteringRules";
  var tx;
  function ux(a) {
    var b = !1;
    return b;
  }
  ux.N = "internal.evaluateMatchingRules";
  var wx = function (a, b, c) {
      if (c)
        switch (c.type) {
          case "event_name":
            return a;
          case "const":
            return c.const_value;
          case "event_param":
            var d = c.event_param.param_name;
            return b[d];
        }
    },
    zx = function (a, b, c, d) {
      if (c && !xx(a, b, c)) return !1;
      if (!d || 0 === d.length) return !0;
      for (var e = 0; e < d.length; e++)
        if (yx(a, b, d[e].predicates || [])) return !0;
      return !1;
    },
    yx = function (a, b, c) {
      for (var d = 0; d < c.length; d++) if (!xx(a, b, c[d])) return !1;
      return !0;
    },
    xx = function (a, b, c) {
      var d = c.values || [],
        e = wx(a, b, d[0]),
        f = wx(a, b, d[1]),
        g = c.type;
      if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g)
        m(e) && (e = e.toLowerCase()), m(f) && (f = f.toLowerCase());
      var h = !1;
      switch (g) {
        case "eq":
        case "eqi":
          h = String(e) === String(f);
          break;
        case "sw":
        case "swi":
          h = 0 === String(e).indexOf(String(f));
          break;
        case "ew":
        case "ewi":
          h = cv(e, f);
          break;
        case "cn":
        case "cni":
          h = 0 <= String(e).indexOf(String(f));
          break;
        case "lt":
          h = Number(e) < Number(f);
          break;
        case "le":
          h = Number(e) <= Number(f);
          break;
        case "gt":
          h = Number(e) > Number(f);
          break;
        case "ge":
          h = Number(e) >= Number(f);
          break;
        case "re":
        case "rei":
          h = ev(e, f, "rei" === g);
      }
      return !!c.negate !== h;
    };
  function Ax(a, b) {
    var c = !1;
    return c;
  }
  Ax.N = "internal.evaluatePredicates";
  var Bx = function (a) {
    var b;
    return b;
  };
  function Cx(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  Cx.M = "getCookieValues";
  function Dx() {
    return ji.qf;
  }
  Dx.N = "internal.getCountryCode";
  function Ex() {
    var a = [];
    return nc(a);
  }
  Ex.N = "internal.getDestinationIds";
  function Fx(a) {
    var b = null;
    return b;
  }
  Fx.M = "getElementById";
  function Gx(a, b) {
    var c;
    L(H(this), ["targetId:!string", "name:!string"], arguments);
    var d = ih(a) || {};
    c = nc(d[b], this.g);
    return c;
  }
  Gx.N = "internal.getProductSettingsParameter";
  function Hx(a, b) {
    var c;
    L(H(this), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
    M(this, "get_url", "query", a);
    var d = wh(yh(z.location.href), "query"),
      e = th(d, a, b);
    c = nc(e, this.g);
    return c;
  }
  Hx.M = "getQueryParameters";
  function Ix(a, b) {
    var c;
    return c;
  }
  Ix.M = "getReferrerQueryParameters";
  function Jx(a) {
    var b = "";
    return b;
  }
  Jx.M = "getReferrerUrl";
  function Kx() {
    return ji.Ah;
  }
  Kx.N = "internal.getRegionCode";
  function Lx(a, b) {
    var c;
    L(H(this), ["targetId:!string", "name:!string"], arguments);
    var d = Vr(a);
    c = nc(d[b], this.g);
    return c;
  }
  Lx.N = "internal.getRemoteConfigParameter";
  function Mx(a) {
    var b = "";
    L(H(this), ["component:?string"], arguments),
      M(this, "get_url", a),
      (b = wh(yh(z.location.href), a));
    return b;
  }
  Mx.M = "getUrl";
  function Nx() {
    M(this, "get_user_agent");
    return z.navigator.userAgent;
  }
  Nx.M = "getUserAgent";
  function Ox(a) {
    if (!a) return {};
    var b = a.ij;
    return uo(b.type, b.index, b.name);
  }
  function Px(a) {
    return a ? { originatingEntity: Ox(a) } : {};
  }
  function Rx(a, b) {}
  Rx.M = "gtagSet";
  function Sx(a, b) {}
  Sx.M = "injectHiddenIframe";
  var Tx = {};
  function Vx(a, b, c, d) {}
  var Wx = Object.freeze({ dl: 1, id: 1 }),
    Xx = {};
  function Yx(a, b, c, d) {}
  Vx.M = "injectScript";
  Yx.N = "internal.injectScript";
  function Zx(a) {
    var b = !0;
    return b;
  }
  Zx.M = "isConsentGranted";
  var $x = function () {
    var a = Mf(function (b) {
      this.g.g.log("error", b);
    });
    a.M = "JSON";
    return a;
  };
  var ay = function () {
      return !1;
    },
    by = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  var cy = ["textContent", "value", "tagName", "children", "childElementCount"];
  function dy(a) {
    var b;
    return b;
  }
  dy.N = "internal.locateUserData";
  function ey() {}
  ey.M = "logToConsole";
  function fy(a) {
    var b = void 0;
    if ("function" === typeof URL) {
      var c;
      a: {
        var d;
        try {
          d = new URL(a);
        } catch (x) {
          c = void 0;
          break a;
        }
        for (
          var e = {}, f = Array.from(d.searchParams), g = 0;
          g < f.length;
          g++
        ) {
          var h = f[g][0],
            k = f[g][1];
          e.hasOwnProperty(h)
            ? "string" === typeof e[h]
              ? (e[h] = [e[h], k])
              : e[h].push(k)
            : (e[h] = k);
        }
        c = nc({
          href: d.href,
          origin: d.origin,
          protocol: d.protocol,
          username: d.username,
          password: d.password,
          host: d.host,
          hostname: d.hostname,
          port: d.port,
          pathname: d.pathname,
          search: d.search,
          searchParams: e,
          hash: d.hash,
        });
      }
      return c;
    }
    var n;
    try {
      n = yh(a);
    } catch (x) {
      return;
    }
    if (!n.protocol || !n.host) return;
    var p = {};
    if (n.search)
      for (
        var q = n.search.replace("?", "").split("&"), r = 0;
        r < q.length;
        r++
      ) {
        var t = q[r].split("="),
          u = t[0],
          v = decodeURIComponent(t.splice(1).join("="));
        p.hasOwnProperty(u)
          ? "string" === typeof p[u]
            ? (p[u] = [p[u], v])
            : p[u].push(v)
          : (p[u] = v);
      }
    n.searchParams = p;
    n.origin = n.protocol + "//" + n.host;
    n.username = "";
    n.password = "";
    b = nc(n);
    return b;
  }
  fy.M = "parseUrl";
  function gy(a) {}
  gy.N = "internal.processAsNewEvent";
  function hy(a, b) {
    var c = !1;
    return c;
  }
  hy.M = "queryPermission";
  function iy() {
    var a = "";
    return a;
  }
  iy.M = "readCharacterSet";
  function jy() {
    var a = "";
    return a;
  }
  jy.M = "readTitle";
  function ky(a, b) {
    var c = this;
  }
  ky.N = "internal.registerCcdCallback";
  var ly = Object.freeze(["config", "event", "get", "set"]);
  function my(a, b, c) {}
  my.N = "internal.registerGtagCommandListener";
  function ny(a, b) {
    var c = !1;
    return c;
  }
  ny.N = "internal.removeDataLayerEventListener";
  function oy() {}
  oy.M = "resetDataLayer";
  function qy(a, b, c, d) {
    L(
      H(this),
      [
        "target:!*",
        "eventName:!*",
        "eventParameters:?DustMap",
        "messageContext:?DustMap",
      ],
      arguments
    );
    var e = c ? oc(c) : {},
      f = oc(a);
    Array.isArray(f) || (f = [f]);
    b = String(b);
    var g = d ? oc(d) : {},
      h = this.g.g;
    for (var k = 0; k < f.length; k++) {
      var n = f[k];
      if ("string" === typeof n) {
        var p = Nl(n);
        if (p) {
          ap(p.containerId, Wr());
          var q = mc(e),
            r = mc(g);
          r.originatingEntity = Ox(h);
          var t = ep(n, b, q);
          hp(t, h.eventId, r);
        }
      }
    }
  }
  qy.N = "internal.sendGtagEvent";
  function ry(a, b, c) {}
  ry.M = "sendPixel";
  function sy(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  sy.M = "setCookie";
  var ty = !1;
  ty = !0;
  function uy(a) {
    L(H(this), ["consentSettings:!DustMap"], arguments);
    for (var b = a.Eb(), c = b.length(), d = 0; d < c; d++) {
      var e = b.get(d);
      e !== P.ve && M(this, "access_consent", e, "write");
    }
    var f = this.g.g,
      g = f.eventId,
      h = Px(f);
    if (ty) {
      var k = bp("consent", "default", oc(a));
      hp(k, g, h);
    } else Ii(oc(a));
  }
  uy.M = "setDefaultConsentState";
  function vy(a, b, c) {
    return !1;
  }
  vy.M = "setInWindow";
  function wy(a, b, c) {
    L(H(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    var d = ih(a) || {};
    d[b] = oc(c, this.g);
    var e = a;
    gh || hh();
    fh[e] = d;
  }
  wy.N = "internal.setProductSettingsParameter";
  function xy(a, b, c) {
    L(H(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    for (var d = b.split("."), e = Vr(a), f = 0; f < d.length - 1; f++) {
      if (void 0 === e[d[f]]) e[d[f]] = {};
      else if (!lc(e[d[f]]))
        throw Error(
          "setRemoteConfigParameter failed, path contains a non-object type: " +
            d[f]
        );
      e = e[d[f]];
    }
    e[d[f]] = oc(c, this.g);
  }
  xy.N = "internal.setRemoteConfigParameter";
  var yy = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  function zy(a, b, c, d) {
    var e = this;
  }
  zy.M = "sha256";
  function Ay(a, b, c) {}
  Ay.N = "internal.sortRemoteConfigParameters";
  var By = {},
    Cy = {};
  By.M = "templateStorage";
  By.getItem = function (a) {
    var b = null;
    return b;
  };
  By.setItem = function (a, b) {};
  By.removeItem = function (a) {};
  By.clear = function () {};
  var Dy = function (a) {
    var b;
    return b;
  };
  var Ey = !1;
  Ey = !0;
  function Fy(a) {
    L(H(this), ["consentSettings:!DustMap"], arguments);
    var b = oc(a),
      c;
    for (c in b) b.hasOwnProperty(c) && M(this, "access_consent", c, "write");
    var d = this.g.g,
      e = d.eventId,
      f = Px(d);
    Ey ? hp(bp("consent", "update", b), e, f) : Ki(b, { eventId: e });
  }
  Fy.M = "updateConsentState";
  var Gy = function () {
    var a = new Wf(),
      b = function (d) {
        return Yf(a, d.N, d);
      },
      c = function (d) {
        return a.add(d.M, d);
      };
    c(iv);
    c(ov);
    c(aw);
    c(dw);
    c(ew);
    c(iw);
    c(jw);
    c(lw);
    c($x());
    c(mw);
    c(Cx);
    c(Hx);
    c(Ix);
    c(Jx);
    c(Mx);
    c(Sx);
    c(Vx);
    c(Zx);
    c(ey);
    c(fy);
    c(hy);
    c(iy);
    c(jy);
    c(ry);
    c(sy);
    c(uy);
    c(vy);
    c(zy);
    c(By);
    c(Fy);
    a.add("Math", wf());
    a.add("Object", Uf);
    a.add("TestHelper", Zf());
    a.add("assertApi", sf);
    a.add("assertThat", tf);
    a.add("decodeUri", xf);
    a.add("decodeUriComponent", yf);
    a.add("encodeUri", zf);
    a.add("encodeUriComponent", Af);
    a.add("fail", Bf);
    a.add("generateRandom", Cf);
    a.add("getContainerVersion", Hf);
    a.add("getTimestamp", Kf);
    a.add("getTimestampMillis", Kf);
    a.add("getType", Lf);
    a.add("makeInteger", Nf);
    a.add("makeNumber", Of);
    a.add("makeString", Pf);
    a.add("makeTableMap", Qf);
    a.add("mock", Tf);
    a.add("fromBase64", Bx, !("atob" in z));
    a.add("localStorage", by, !ay());
    a.add("toBase64", Dy, !("btoa" in z));
    b(Ev);
    b(Lv);
    b(Qv);
    b(Zv);
    b(gw);
    b(sx);
    b(ux);
    b(Ex);
    b(Yx);
    b(dy);
    b(my);
    b(qy);
    Yf(a, "internal.getFlags", Jf);
    c(Rx);
    b(bw), b(Lx), b(xy), b(Ay), b(Gx), b(wy);
    b(lv);
    b(xw);
    b(Cw);
    b(Hw);
    b(Qw);
    b(Uw);
    b(ex);
    b(rx);
    b(ny);
    b(Dx);
    b(Kx);
    return function (d) {
      var e;
      if (a.g.hasOwnProperty(d)) e = a.get(d, this);
      else {
        var f;
        if ((f = a.o.hasOwnProperty(d))) {
          var g = !1,
            h = this.g.g;
          if (h) {
            var k = h.Wc();
            if (k) {
              0 !== k.indexOf("__cvt_") && (g = !0);
            }
          }
          f = g;
        }
        if (f) {
          var n = a.o.hasOwnProperty(d) ? a.o[d] : void 0;
          e = n;
        } else throw Error(d + " is not a valid API name.");
      }
      return e;
    };
  };
  var Hy = function () {
      return !1;
    },
    Iy = function () {
      var a = {};
      return function (b, c, d) {};
    };
  var Jy;
  function Ky() {
    var a = Jy;
    return function (b, c, d) {
      var e = d && d.event;
      Ly(c);
      var f = new gb();
      Ka(c, function (q, r) {
        var t = nc(r);
        void 0 === t && void 0 !== r && ig(44);
        f.set(q, t);
      });
      a.g.g.I = ye();
      var g = {
        Vi: Le(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        Vd:
          void 0 !== e
            ? function (q) {
                return e.sb.Vd(q);
              }
            : void 0,
        Wc: function () {
          return b;
        },
        log: function () {},
        ij: { index: d && d.index, type: d && d.type, name: d && d.name },
      };
      if (Hy()) {
        var h = Iy(),
          k = void 0,
          n = void 0;
        g.Ta = {
          Uf: [],
          Oc: {},
          Wa: function (q, r, t) {
            1 === r && (k = q);
            7 === r && (n = t);
            h(q, r, t);
          },
          If: Rf(),
        };
        g.log = function (q, r) {
          if (k) {
            var t = Array.prototype.slice.call(arguments, 1);
            h(k, 4, { level: q, source: n, message: t });
          }
        };
      }
      var p = Id(a, g, [b, f]);
      a.g.g.I = void 0;
      p instanceof na && "return" === p.g && (p = p.o);
      return oc(p);
    };
  }
  function Ly(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ca(b) &&
      (a.gtmOnSuccess = function () {
        J(b);
      });
    Ca(c) &&
      (a.gtmOnFailure = function () {
        J(c);
      });
  }
  function My() {
    Jy.g.g.R = function (a, b, c) {
      S.SANDBOXED_JS_SEMAPHORE = S.SANDBOXED_JS_SEMAPHORE || 0;
      S.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        S.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function Ny(a) {
    void 0 !== a &&
      Ka(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          Tg[e] = Tg[e] || [];
          Tg[e].push(b);
        }
      });
  }
  var Oy = encodeURI,
    W = encodeURIComponent,
    Py = Pb;
  var Qy = function (a, b) {
      if (!a) return !1;
      var c = wh(yh(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    Ry = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };

  var aA = !1;
  aA = !0;
  var bA = !1;
  bA = !0;
  var cA = !1;
  cA = !0;
  var dA = {};
  dA[P.Wb] = "";
  dA[P.Oa] = "";
  dA[P.Va] = "";
  dA[P.wa] = "auto";
  dA[P.ib] = "/";
  dA[P.Ia] = 63072e3;
  dA[P.Jc] = 30;
  dA[P.Ld] = 1e4;
  dA[P.Ja] = !0;
  var eA = function (a, b, c, d, e) {
    cm.call(this, a, b, d);
    this.o = c;
    this.Z = d.eventModel;
    this.Gg = d.containerConfig;
    aA || ((this.I = d.getWithConfig(P.sa) ? 1 : 8), (this.Jg = this.cc = !1));
    aA || (this.Ze = d.getWithConfig(P.jb) ? 1 : 8);
    this.C = e;
    this.R = this.Ye = this.Ug = this.B = this.Lg = !1;
    this.Kb = 0;
    this.vb = !1;
    this.ma = 0;
    this.Rg = this.g = this.cf = void 0;
    cA || (this.Ng = !1);
    bA || (this.Hg = this.Ig = void 0);
  };
  ka(eA, cm);
  l = eA.prototype;
  l.Wd = function (a, b) {
    void 0 === this.D(a) && (this.Z[a] = b);
  };
  l.D = function (a) {
    return void 0 !== this.Z[a]
      ? this.Z[a]
      : void 0 !== this.s.getWithConfig(a)
      ? this.s.getWithConfig(a)
      : void 0 !== this.C[a]
      ? this.C[a]
      : dA[a];
  };
  l.getRemoteConfig = function (a) {
    return void 0 !== this.s.remoteConfig[a]
      ? this.s.remoteConfig[a]
      : this.C[a];
  };
  l.Jb = function (a) {
    var b = em(this, P.Dd, this.C[P.Dd]);
    if (b && void 0 !== b[a || this.eventName]) return b[a || this.eventName];
  };
  l.nh = function () {
    var a;
    a = aA ? this.metadata.user_data : this.D(P.za);
    if ("object" === typeof a) return a;
  };
  l.oh = function () {
    return !!this.nh();
  };
  l.abort = function () {
    throw "ABORT";
  };
  l.Ca = function () {
    return !((!0 !== this.D(P.Fc) && "true" !== this.D(P.Fc)) || !this.D(P.aa));
  };
  var fA = !1,
    gA = function (a) {
      var b = a.eventName === P.zc && yi() && a.Ca(),
        c = a.metadata.is_conversion || a.vb,
        d = a.metadata.is_session_start || a.B,
        e = a.metadata.create_dc_join || a.Ye,
        f = a.metadata.create_google_join || a.R,
        g = (a.g || a.metadata.euid_mode_enabled) && a.oh();
      return !(!Eb.sendBeacon || c || g || d || e || f || b || fA);
    };
  var hA = function (a) {
    fg("GA4_EVENT", a);
  };
  var jA = function (a) {
      return !a || iA.test(a) || P.Ci.hasOwnProperty(a);
    },
    kA = function (a, b, c) {
      for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
        var f = d[e];
        if (f.edit_param) {
          var g = f.edit_param.param_name,
            h = wx(a, b, f.edit_param.param_value),
            k;
          if (h) {
            var n = Number(h);
            k = isNaN(n) ? h : n;
          } else k = h;
          b[g] = k;
        } else f.delete_param && delete b[f.delete_param.param_name];
      }
    },
    iA = /^(_|ga_|google_|gtag\.|firebase_).*$/;
  var lA = function (a) {
      var b = 0,
        c = 0;
      return {
        start: function () {
          b = Ra();
        },
        stop: function () {
          c = this.get();
        },
        get: function () {
          var d = 0;
          a.Ff() && (d = Ra() - b);
          return d + c;
        },
      };
    },
    mA = !1;
  mA = !0;
  var nA = function () {
    this.g = void 0;
    this.o = 0;
    this.isActive = this.isVisible = this.B = !1;
    this.I = this.C = void 0;
  };
  l = nA.prototype;
  l.Ei = function (a) {
    var b = this;
    if (!this.g) {
      this.B = I.hasFocus();
      this.isVisible = !I.hidden;
      this.isActive = !0;
      var c = function (d, e, f) {
        Qb(d, e, function (g) {
          b.g.stop();
          f(g);
          b.Ff() && b.g.start();
        });
      };
      c(z, "focus", function () {
        b.B = !0;
      });
      c(z, "blur", function () {
        b.B = !1;
      });
      c(z, "pageshow", function (d) {
        b.isActive = !0;
        d.persisted && ig(56);
        b.I && b.I();
      });
      c(z, "pagehide", function () {
        b.isActive = !1;
        b.C && b.C();
      });
      c(I, "visibilitychange", function () {
        b.isVisible = !I.hidden;
      });
      a.Ca() &&
        -1 === (Eb.userAgent || "").indexOf("Firefox") &&
        -1 === (Eb.userAgent || "").indexOf("FxiOS") &&
        c(z, "beforeunload", function () {
          fA = !0;
        });
      this.Rf();
      this.o = 0;
    }
  };
  l.Rf = function () {
    this.o += this.he();
    this.g = lA(this);
    this.Ff() && this.g.start();
  };
  l.sk = function (a) {
    var b = this.he();
    if (mA && 0 < b) {
      a.F[P.Cd] = b;
      return;
    }
    a.ma = b;
  };
  l.uj = function (a) {
    mA ? (a.F[P.Cd] = void 0) : (a.ma = 0);
    this.Rf();
    this.o = 0;
  };
  l.Ff = function () {
    return this.B && this.isVisible && this.isActive;
  };
  l.rj = function () {
    return this.o + this.he();
  };
  l.he = function () {
    return (this.g && this.g.get()) || 0;
  };
  l.bk = function (a) {
    this.C = a;
  };
  l.Bh = function (a) {
    this.I = a;
  };
  function oA() {
    var a = z;
    return (a.gaGlobal = a.gaGlobal || {});
  }
  var pA = function () {
      var a = oA();
      a.hid = a.hid || Ga();
      return a.hid;
    },
    qA = function (a, b) {
      var c = oA();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var sA = function (a, b, c) {
      if (rA) {
        var d = a.metadata.client_id_source;
        if (void 0 === d || c <= d)
          (a.F[P.sa] = b),
            (a.Z[P.sa] = void 0),
            (a.metadata.client_id_source = c);
      } else c <= a.I && ((a.Z[P.sa] = b), (a.I = c));
    },
    wA = function (a, b) {
      var c;
      var d = tA(b),
        e = String(b.D(P.wa)),
        f = String(b.D(P.ib)),
        g = Number(b.D(P.Ia)),
        h = b.D(P.Xb),
        k = {
          cb: P.T,
          domain: e,
          path: f,
          expires: g ? new Date(Ra() + 1e3 * g) : void 0,
          flags: "" + b.D(P.Va),
        };
      if (!1 === h && uA(b) === a) c = !0;
      else {
        var n = nj(a, vA[0], e, f);
        c = 1 !== fj(d, n, k);
      }
      return c;
    },
    uA = function (a) {
      var b = tA(a),
        c = "" + a.D(P.wa),
        d = "" + a.D(P.ib),
        e = mj(b, c, d, vA, P.T);
      if (!e) {
        var f = String(a.D(P.Wb));
        f && f != b && (e = mj(f, c, d, vA, P.T));
      }
      return e;
    },
    tA = function (a) {
      return String(a.D(P.Oa)) + "_ga";
    },
    rA = !1;
  rA = !0;
  var vA = ["GA1"];
  var zA = function (a, b) {
      var c = xA(b),
        d = String(b.D(P.wa)),
        e = String(b.D(P.ib)),
        f = Number(b.D(P.Ia)),
        g = nj(a, yA[0], d, e),
        h = {
          cb: P.T,
          domain: d,
          path: e,
          expires: f ? new Date(Ra() + 1e3 * f) : void 0,
          flags: String(b.D(P.Va)),
        };
      return 1 !== fj(c, g, h);
    },
    AA = function (a) {
      var b = xA(a),
        c = String(a.D(P.wa)),
        d = String(a.D(P.ib));
      return mj(b, c, d, yA, P.T);
    },
    BA = function (a, b, c, d, e, f, g) {
      if (a && b) {
        var h = [a, b, Ma(c), d, e];
        return h.join(".");
      }
    },
    CA = !1;
  CA = !0;
  var yA = ["GS1"],
    xA = function (a) {
      return String(a.D(P.Oa)) + "_ga_" + a.Ba.substr(2);
    },
    DA = function (a) {
      return CA
        ? BA(
            a.F[P.Cb],
            a.F[P.Lc],
            a.F[P.Kc],
            a.o,
            a.metadata.join_timer_sec || 0,
            !!a.metadata[P.Ec],
            a.F[P.jb]
          )
        : BA(
            a.Z[P.Cb],
            a.Z[P.Lc],
            a.Z[P.Kc],
            a.o,
            a.Kb,
            !!a.Z[P.Ec],
            a.Z[P.jb]
          );
    };
  var EA = function (a) {
      var b = a.D(P.ya),
        c = a.getRemoteConfig(P.ya);
      if (c === b) return c;
      var d = mc(b);
      c && c[P.U] && (d[P.U] = (d[P.U] || []).concat(c[P.U]));
      return d;
    },
    FA = function (a, b) {
      var c = Fk(!0);
      return "1" !== c._up ? {} : { clientId: c[a], Eh: c[b] };
    },
    GA = function (a, b, c) {
      var d = Fk(!0),
        e = d[b];
      e && (sA(a, e, 2), wA(e, a));
      var f = d[c];
      f && zA(f, a);
      return !(!e || !f);
    },
    HA = !1;
  HA = !0;
  var IA = !1;
  IA = !0;
  var JA = !1,
    KA = function (a) {
      var b = EA(a) || {},
        c = tA(a),
        d = xA(a);
      Ok(b[P.Zb], !!b[P.U]) && GA(a, c, d) && (JA = !0);
      b[P.U] &&
        Lk(
          function () {
            var e = {},
              f = uA(a);
            f && (e[c] = f);
            var g = AA(a);
            g && (e[d] = g);
            var h = Xi("FPLC", void 0, void 0, P.T);
            h.length && (e._fplc = h[0]);
            return e;
          },
          b[P.U],
          b[P.Hc],
          !!b[P.ac]
        );
    },
    MA = function (a) {
      if (!a.D(P.qb)) return {};
      var b = tA(a),
        c = xA(a);
      Mk(function () {
        var d;
        if (Li("analytics_storage")) d = {};
        else {
          var e = {};
          d =
            ((e._up = "1"),
            (e[b] = HA ? a.F[P.sa] : a.Z[P.sa]),
            (e[c] = DA(a)),
            e);
        }
        return d;
      }, 1);
      return !Li("analytics_storage") && LA() ? FA(b, c) : {};
    },
    LA = function () {
      var a = vh(z.location, "host"),
        b = vh(yh(I.referrer), "host");
      return a && b
        ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a)
          ? !0
          : !1
        : !1;
    },
    NA = function (a) {
      if (!a) return a;
      var b = String(a);
      b = Ek(b);
      return (b = Ek(b, "_ga"));
    };
  var OA = function (a) {
    var b = !1;
    return b;
  };
  var PA = function () {
    var a = Ra(),
      b = a + 864e5,
      c = 20,
      d = 5e3;
    return function () {
      var e = Ra();
      e >= b && ((b = e + 864e5), (d = 5e3));
      if (1 > d) return !1;
      c = Math.min(c + ((e - a) / 1e3) * 5, 20);
      a = e;
      if (1 > c) return !1;
      d--;
      c--;
      return !0;
    };
  };
  var QA = function (a) {
      return wh(yh(a.F[P.ob]), "host", !0);
    },
    RA = !1;
  RA = !0;
  var SA = "" + Ga(),
    TA = !1,
    UA = void 0;
  var VA = function () {
    if (Ca(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var WA = function (a, b) {
      if (b.Ca()) {
        var c = VA();
        c && (a.us_privacy = c);
        var d = Yj();
        d && (a.gdpr = d);
        var e = Xj();
        e && (a.gdpr_consent = e);
      }
    },
    YA = function (a, b) {
      if (yi()) {
        a.gcs = Mi();
        var c = XA ? b.metadata.is_consent_update : b.Ig;
        c && (a.gcu = "1");
        if (b.Ca()) {
          zi() && (a.gcd = "G1" + Gi(wi));
          var d = b.D(P.na);
          a.adr = void 0 !== d && !1 !== d ? "1" : "0";
          if (c) {
            var e;
            XA ? (e = b.metadata.consent_update_type) : (e = b.Hg);
            a.gcut = P.we[e || ""];
          }
        }
      }
    },
    ZA = function (a, b, c) {
      void 0 === c && (c = {});
      if ("object" === typeof b) for (var d in b) ZA(a + "." + d, b[d], c);
      else c[a] = b;
      return c;
    },
    bB = function (a) {
      var b = Dm(a.D(P.aa), "/g/collect");
      if (b) return b;
      var c = em(a, P.lb, a.D(P.lb));
      return c &&
        !em(a, P.Gc, !1) &&
        !1 !== a.D(P.Bc) &&
        Sq() &&
        Li(P.H) &&
        Li(P.T)
        ? $A()
        : aB();
    },
    cB = !1;
  cB = !0;
  var XA = !1;
  XA = !0;
  var dB = !1;
  dB = !0;
  var eB = "",
    fB = !1;
  fB = !0;
  var gB = {};
  gB[P.Ai] = "tid";
  gB[P.sa] = "cid";
  gB[P.Ab] = "ul";
  gB[P.Ne] = "_fid";
  gB[P.Ue] = "tt";
  gB[P.Id] = "ir";
  gB[P.Te] = "sr";
  gB[P.mg] = "gdid";
  (gB[P.Se] = "_rdi"), (gB[P.lg] = "_geo");
  gB[P.Fg] = "gtm_up";
  gB[P.Eg] = "_glv";
  var hB = {};
  hB[P.Cb] = "sid";
  hB[P.Lc] = "sct";
  hB[P.Kc] = "seg";
  hB[P.nb] = "dl";
  hB[P.ob] = "dr";
  hB[P.Jd] = "dt";
  hB[P.xa] = "cu";
  hB[P.Pa] = "uid";
  hB[P.vd] = "cc";
  hB[P.wd] = "ci";
  hB[P.xd] = "cm";
  hB[P.yd] = "cn";
  hB[P.zd] = "cs";
  hB[P.Ad] = "ck";
  var iB = {};
  iB[P.Cd] = "_et";
  iB[P.kg] = "edid";
  var jB = {};
  jB[P.vd] = "cc";
  jB[P.wd] = "ci";
  jB[P.xd] = "cm";
  jB[P.yd] = "cn";
  jB[P.zd] = "cs";
  jB[P.Ad] = "ck";
  var aB = function () {
      var a = "www";
      fB && eB && (a = eB);
      return "https://" + a + ".google-analytics.com/g/collect";
    },
    $A = function () {
      var a;
      fB && eB && (a = eB);
      return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect";
    },
    kB = function (a, b, c) {
      function d(A, B) {
        if (void 0 !== B && !P.Bg.hasOwnProperty(A)) {
          null === B && (B = "");
          var E = B;
          !0 === B && (E = "1");
          !1 === B && (E = "0");
          var F;
          if (gB[A]) (F = gB[A]), (e[F] = Re(E, 420));
          else if (hB[A]) (F = hB[A]), (g[F] = Re(E, 420));
          else if (iB[A]) (F = iB[A]), (f[F] = Re(E, 420));
          else if ("_" === A.charAt(0)) e[A] = Re(E, 420);
          else {
            var D;
            (D = u(A, B)) ||
              (jB[A]
                ? (D = !0)
                : A !== P.Cc
                ? (D = !1)
                : ("object" !== typeof B && t(A, B), (D = !0)));
            D || t(A, B);
          }
        }
      }
      var e = {},
        f = {},
        g = {};
      e.v = "2";
      e.tid = a.Ba;
      e.gtm = zj();
      e._p = pA();
      a.cf && (e._z = a.cf);
      c && (e.em = c);
      if (cB ? a.metadata.create_google_join : a.R) e._gaz = 1;
      YA(e, a);
      WA(e, a);
      a.Rg && !cB && (e.gtm_up = "1");
      a.Ca() && a.Ng && !dB && (e._glv = "1");
      var h = a.F[P.Nk];
      h && (e.gdid = h);
      f.en = Re(a.eventName, 40);
      var k = cB ? a.metadata.is_first_visit_conversion : a.Lg;
      cB
        ? a.metadata.is_first_visit && (f._fv = k ? 2 : 1)
        : a.cc && (f._fv = k ? 2 : 1);
      cB ? a.metadata.is_new_to_site && (f._nsi = 1) : a.Jg && (f._nsi = 1);
      var n = cB ? a.metadata.is_session_start_conversion : a.Ug;
      cB
        ? a.metadata.is_session_start && (f._ss = n ? 2 : 1)
        : a.B && (f._ss = n ? 2 : 1);
      cB ? a.metadata.is_conversion && (f._c = 1) : a.vb && (f._c = 1);
      a.metadata.is_external_event && (f._ee = 1);
      0 < a.ma && !cB && (f._et = a.ma);
      if (a.metadata.is_ecommerce) {
        var p = a.F[P.da] || a.D(P.da);
        if (Ea(p))
          for (var q = 0; q < p.length && 200 > q; q++)
            f["pr" + (q + 1)] = We(p[q]);
      }
      var r = a.F[P.Mk];
      r && (f.edid = r);
      for (
        var t = function (A, B) {
            A = Re(A, 40);
            var C = "ep." + A,
              E = "epn." + A;
            A = Da(B) ? E : C;
            var F = Da(B) ? C : E;
            f.hasOwnProperty(F) && delete f[F];
            f[A] = Re(B, 100);
          },
          u = function (A, B) {
            var C = A.split(".");
            if (A === P.za && "object" !== typeof B) return t(A, B), !0;
            if (C[0] === P.za) {
              if ((1 < C.length || "object" === typeof B) && a.Ca()) {
                var E = ZA(A, B);
                Ka(E, function (F, D) {
                  return void t(F, D);
                });
              }
              return !0;
            }
            return !1;
          },
          v = 0;
        v < P.Ag.length;
        ++v
      ) {
        var x = P.Ag[v];
        d(x, a.D(x));
      }
      Ka(a.Gg, d);
      Ka(a.Z, d);
      Ka(a.F, d);
      a.metadata.user_data && u("user_data", a.metadata.user_data);
      var y = a.F[P.Qa] || a.D(P.Qa) || {};
      (!1 !== a.D(P.ba) && Tq()) || (y._npa = "1");
      Ka(y, function (A, B) {
        if (void 0 !== B)
          if ((null === B && (B = ""), A === P.Pa && !g.uid)) g.uid = Re(B, 36);
          else if (b[A] !== B) {
            var C = (Da(B) ? "upn." : "up.") + Re(A, 24);
            f[C] = Re(B, 36);
            b[A] = B;
          }
      });
      jm[17] && a.Ca() && d("_uc", ji.qf);
      var w = !1;
      return Ye.call(this, { Da: e, Nb: g, Z: f }, bB(a), a.Ca(), w) || this;
    };
  ka(kB, Ye);
  var lB = function (a, b) {
      return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
        return b[d] || c;
      });
    },
    mB = function (a) {
      var b = a.search;
      return (
        a.protocol +
        "//" +
        a.hostname +
        a.pathname +
        (b ? b + "&richsstsse" : "?richsstsse")
      );
    },
    nB = function (a) {
      var b = {},
        c = "",
        d = a.pathname.indexOf("/g/collect");
      0 <= d && (c = a.pathname.substring(0, d));
      b.transport_url = a.protocol + "//" + a.hostname + c;
      return b;
    },
    oB = function (a, b) {
      var c = new z.XMLHttpRequest();
      c.withCredentials = !0;
      var d = b ? "POST" : "GET",
        e = "",
        f = 0,
        g = yh(a),
        h = nB(g),
        k = mB(g);
      c.onprogress = function (n) {
        if (200 === c.status) {
          e += c.responseText.substring(f);
          f = n.loaded;
          for (var p = lB(e, h), q = p.indexOf("\n\n"); -1 !== q; ) {
            var r;
            a: {
              var t,
                u = p.substring(0, q).split("\n"),
                v =
                  "undefined" != typeof Symbol &&
                  Symbol.iterator &&
                  u[Symbol.iterator];
              t = v ? v.call(u) : { next: aa(u) };
              var x = t.next().value,
                y = t.next().value;
              if (x.startsWith("event: message") && y.startsWith("data: "))
                try {
                  r = JSON.parse(y.substring(y.indexOf(":") + 1));
                  break a;
                } catch (K) {}
              r = void 0;
            }
            var w = r;
            if (w) {
              var A = w.send_pixel || [];
              if (Array.isArray(A))
                for (var B = 0; B < A.length; B++) {
                  var C = A[B],
                    E = Aj("", 0);
                  if (1 === E) {
                    var F = Math.floor(2 * Math.random()) + 1,
                      D,
                      O = C,
                      N = F,
                      R = 0 < O.indexOf("?") ? "&" : "?";
                    D = "" + O + R + "gtmexpsb=" + N;
                    2 === F ? Wb(D) : Pb(D);
                  } else 2 === E ? Wb(C) : Pb(C);
                }
              var Z = w.send_beacon || [];
              if (Array.isArray(Z)) for (var Q = 0; Q < Z.length; Q++) Wb(Z[Q]);
            }
            p = p.substring(q + 2);
            q = p.indexOf("\n\n");
          }
          e = p;
        }
      };
      c.open(d, k);
      c.send(b);
    };
  var rB = function (a, b, c, d) {
      var e = a + "?" + b;
      pB && (d = !(0 === e.indexOf(aB()) || 0 === e.indexOf($A())));
      d && !fA ? oB(e, c) : qB(a, b, c);
    },
    sB = function (a) {},
    pB = !1;
  var tB = !1;
  tB = !0;
  var uB = function () {
    this.C = 1;
    this.I = {};
    this.g = new Ze();
    this.o = -1;
  };
  uB.prototype.B = function (a, b) {
    var c = this,
      d;
    try {
      d = new kB(a, this.I, b);
    } catch (v) {
      a.abort();
    }
    var e = gA(a);
    (e && this.g.C(d)) || this.flush();
    if (e && this.g.add(d)) {
      if (0 > this.o) {
        var f = z,
          g = f.setTimeout,
          h;
        a.Ca() ? (vB ? ((vB = !1), (h = wB)) : (h = xB)) : (h = 5e3);
        this.o = g.call(
          f,
          function () {
            return c.flush();
          },
          h
        );
      }
    } else {
      var k = af(d, this.C++);
      rB(d.g, k.Mf, k.body, d.C);
      var n = a.metadata.create_dc_join || a.Ye,
        p = a.metadata.create_google_join || a.R,
        q = !1 !== a.D(P.Ha),
        r = !1 !== a.D(P.ba),
        t = { eventId: a.s.eventId, priorityId: a.s.priorityId },
        u = {
          ik: n,
          jk: p,
          tj: String(em(a, P.Gd, a.D(P.Gd))),
          Si: q,
          Ri: r,
          xj: em(a, P.Gc, !1),
          Tk: t,
        };
      yB(d, u);
    }
  };
  uB.prototype.add = function (a) {
    (tB ? a.metadata.euid_mode_enabled : a.g) && !fA ? this.R(a) : this.B(a);
  };
  uB.prototype.flush = function () {
    if (this.g.events.length) {
      var a = bf(this.g, this.C++);
      rB(this.g.g, a.Mf, a.body, this.g.o);
      this.g = new Ze();
      0 <= this.o && (z.clearTimeout(this.o), (this.o = -1));
    }
  };
  uB.prototype.R = function (a) {
    var b = this,
      c = a.nh();
    c
      ? Ag(c, function (d) {
          b.B(a, 1 === d.split("~").length ? void 0 : d);
        })
      : this.B(a);
  };
  var yB = function (a, b) {
      function c(r) {
        p.push(r + "=" + encodeURIComponent("" + a.Da[r]));
      }
      var d = b.ik,
        e = b.jk,
        f = b.tj,
        g = b.Si,
        h = b.Ri,
        k = b.xj,
        n = b.kk;
      if (d || e || n) {
        var p = [];
        c("tid");
        c("cid");
        c("gtm");
        p.push("aip=1");
        a.Nb.uid && p.push("uid=" + encodeURIComponent("" + a.Nb.uid));
        d &&
          (qB(
            "https://stats.g.doubleclick.net/g/collect",
            "v=2&" + p.join("&")
          ),
          Fi("https://stats.g.doubleclick.net/g/collect?v=2&" + p.join("&")));
        if (e) {
          p.push("z=" + Ga());
          if (!k) {
            var q =
              f && 0 === f.indexOf("google.") && "google.com" != f
                ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace(
                    "%",
                    f
                  )
                : void 0;
            q && Pb(q + p.join("&"));
          }
        }
        n && sB(a);
      }
    },
    qB = function (a, b, c) {
      var d = a + "?" + b;
      c ? Eb.sendBeacon && Eb.sendBeacon(d, c) : Wb(d);
    },
    wB = Aj("", 500),
    xB = Aj("", 5e3),
    vB = !0;
  var zB = window,
    AB = document,
    BB = function (a) {
      var b = zB._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === zB["ga-disable-" + a]))
        return !0;
      try {
        var c = zB.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Ri("AMP_TOKEN", String(AB.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return AB.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var CB = {};
  var DB = function (a, b, c) {
      c || (c = function () {});
      var d = function (e) {
        void 0 !== e[b] && (e[b] = c(e[b]));
      };
      d(a.F);
      d(a.Z);
      d(a.Gg);
      d(a.s.globalConfig);
    },
    FB = function (a, b) {
      var c = P.H;
      Li(c) ||
        Oi(function () {
          EB[11]
            ? ((b.metadata.is_consent_update = !0),
              (b.metadata.consent_update_type = c))
            : ((b.Ig = !0), (b.Hg = c));
          a.Yg(b);
        }, c);
    },
    EB = { 0: !0, 9: !0, 6: !0, 5: !0, 10: !0, 3: !0, 2: !0 };
  EB[1] = !0;
  EB[8] = !0;
  EB[11] = !0;
  EB[12] = !0;
  var GB = !1;
  CB.Bi = "";
  var HB = {},
    IB =
      ((HB[P.vd] = !0),
      (HB[P.wd] = !0),
      (HB[P.xd] = !0),
      (HB[P.yd] = !0),
      (HB[P.zd] = !0),
      (HB[P.Ad] = !0),
      HB),
    JB = function (a, b) {
      this.I = a;
      this.cc = b;
      this.ma = new uB();
      this.g = void 0;
      this.C = new nA();
      this.o = this.B = void 0;
      this.R = !1;
      this.vb = void 0;
    };
  l = JB.prototype;
  l.Vj = function (a, b, c) {
    var d = this;
    if (!c.eventMetadata.is_external_event || "_" !== a.charAt(0)) {
      a !== P.Ma && a !== P.Ua && jA(a) && ig(58);
      KB(c.eventModel);
      var e = new eA(this.I, a, b, c, this.cc),
        f = [P.T],
        g = !1;
      g = e.Ca();
      (em(e, P.lb, e.D(P.lb)) || g) && f.push(P.H);
      Pi(function () {
        d.Wj(e);
      }, f);
    }
  };
  l.Wj = function (a) {
    var b, c;
    this.o = a;
    try {
      BB(a.Ba) && (ig(28), a.abort());
      0 <= CB.Bi.replace(/\s+/g, "").split(",").indexOf(a.eventName) &&
        (ig(33), a.abort());
      var d = a.Jb();
      d && d.blacklisted && (ig(34), a.abort());
      var e = I.location.protocol;
      "http:" != e && "https:" != e && (ig(29), a.abort());
      Eb && "preview" == Eb.loadPurpose && (ig(30), a.abort());
      var f = S.grl;
      f || ((f = PA()), (S.grl = f));
      f() || (ig(35), a.abort());
      LB(a);
      this.Fi(a);
      this.C.sk(a);
      var k = this.zh,
        n;
      !a.D(P.qb) ||
        Li(P.T) ||
        (HA ? a.s.getWithConfig(P.sa) : 1 === a.I) ||
        (HA ? (a.F[P.Fg] = !0) : (a.Rg = !0));
      var p;
      var q;
      q = void 0 === q ? 3 : q;
      var r = z.location.href;
      if (r) {
        var t = yh(r).search.replace("?", ""),
          u = th(t, "_gl", !1, !0) || "";
        p = u ? void 0 !== Gk(u, q) : !1;
      } else p = !1;
      var v = p;
      IA ? v && a.Ca() && (a.F[P.Eg] = !0) : (a.Ng = v);
      a.eventName === P.Ma
        ? (a.D(P.qb) && nl(["aw", "dc"]), KA(a), (n = MA(a)))
        : (n = {});
      k.call(this, n);
      a.eventName == P.Ma &&
        (a.D(P.Ja) || a.abort(),
        a.s.eventModel[P.ca] &&
          ((a.s.containerConfig[P.ca] = a.s.eventModel[P.ca]),
          (a.s.eventModel[P.ca] = void 0),
          EB[8] && (a.F[P.ca] = void 0)),
        (a.eventName = P.zc));
      var x = ab(a.s.getMergedValues(P.ca, 1), ".");
      x && (a.F[P.mg] = x);
      var y = ab(a.s.getMergedValues(P.ca, 2), ".");
      y && (a.F[P.kg] = y);
      var w = this.g,
        A = this.B,
        B = this.C,
        C = AA(a);
      C || (C = A);
      var E = Ma(a.D(P.Jc)),
        F;
      F = Ma(a.D(P.Ld));
      var D;
      a: {
        if (C) {
          var O = C.split(".");
          if (!(5 > O.length || 7 < O.length)) {
            D = {
              sessionId: O[0],
              oe: Number(O[1]),
              hd: !!Number(O[2]),
              Gf: Number(O[3]),
              Kb: Number(O[4] || 0),
              Lb: "1" === O[5],
              de: "0" !== O[6] ? O[6] : void 0,
            };
            break a;
          }
        }
        D = void 0;
      }
      CA &&
        ((a.metadata.is_first_visit = !1),
        (a.metadata.is_session_start = !1),
        (a.metadata.join_timer_sec = 0));
      if (D && D.Kb) {
        var N = Math.max(0, D.Kb - Math.max(0, a.o - D.Gf));
        CA ? (a.metadata.join_timer_sec = N) : (a.Kb = N);
      }
      var R = !1;
      D ||
        (CA ? (a.metadata.is_first_visit = !0) : (a.cc = !0),
        (R = !0),
        (D = {
          sessionId: String(a.o),
          oe: 1,
          hd: !1,
          Gf: a.o,
          Lb: !1,
          de: void 0,
        }));
      a.o > D.Gf + 60 * E &&
        ((R = !0),
        (D.sessionId = String(a.o)),
        D.oe++,
        (D.hd = !1),
        (D.de = void 0));
      if (R) CA ? (a.metadata.is_session_start = !0) : (a.B = !0), B.uj(a);
      else if (B.rj() > F || a.eventName == P.zc) D.hd = !0;
      if (CA) {
        dm(a, P.Cb, D.sessionId);
        dm(a, P.Lc, D.oe);
        dm(a, P.Kc, D.hd ? 1 : 0);
      } else {
        a.Wd(P.Cb, D.sessionId);
        a.Wd(P.Lc, D.oe);
        a.Wd(P.Kc, D.hd ? 1 : 0);
      }
      var ua = a.D(P.sa),
        ra;
      rA ? ((a.metadata.is_new_to_site = !1), (ra = ua ? 1 : 8)) : (ra = a.I);
      ua || ((ua = uA(a)), (ra = 3));
      ua || ((ua = w), (ra = 5));
      if (!ua) {
        var Ja = Li(P.T),
          Va = oA();
        ua = !Va.from_cookie || Ja ? Va.vid : void 0;
        ra = 6;
      }
      ua
        ? (ua = "" + ua)
        : ((ua = jj()),
          (ra = 7),
          rA
            ? (a.metadata.is_first_visit = a.metadata.is_new_to_site = !0)
            : (a.cc = a.Jg = !0));
      sA(a, ua, ra);
      NB(a);
      var pc = "",
        Nb = I.location;
      if (Nb) {
        var ed = Nb.pathname || "";
        "/" != ed.charAt(0) && (ed = "/" + ed);
        pc = Nb.protocol + "//" + Nb.hostname + ed + Nb.search;
      }
      dm(a, P.nb, pc);
      var RB = P.ob,
        Ch;
      a: {
        var gt = Xi("_opt_expid", void 0, void 0, P.T)[0];
        if (gt) {
          var ht = decodeURIComponent(gt).split("$");
          if (3 === ht.length) {
            Ch = ht[2];
            break a;
          }
        }
        if (void 0 !== S.ga4_referrer_override) Ch = S.ga4_referrer_override;
        else {
          var it = $g("gtm.gtagReferrer." + a.Ba);
          Ch = it ? "" + it : I.referrer;
        }
      }
      dm(a, RB, Ch || void 0);
      dm(a, P.Jd, I.title);
      dm(a, P.Ab, (Eb.language || "").toLowerCase());
      var Dh = z.screen;
      b = Dh ? Dh.width : 0;
      c = Dh ? Dh.height : 0;
      dm(a, P.Te, b + "x" + c);
      EB[1] &&
        ((a.metadata.create_dc_join = !1),
        (a.metadata.create_google_join = !1));
      if (!1 !== a.D(P.Bc) && Sq() && Li(P.H)) {
        var Df = em(a, P.lb, a.D(P.lb));
        if ((EB[1] ? a.metadata.is_session_start : a.B) || a.D(P.Oe)) {
          EB[1] ? (a.metadata.create_dc_join = !!Df) : (a.Ye = !!Df);
        }
        var rl;
        EB[1] ? (rl = a.metadata.join_timer_sec) : (rl = a.Kb);
        var SB = rl;
        Df &&
          0 === (SB || 0) &&
          (EB[1]
            ? ((a.metadata.join_timer_sec = 60),
              (a.metadata.create_google_join = !0))
            : ((a.Kb = 60), (a.R = !0)));
      }
      OB(a);
      P.Cg.hasOwnProperty(a.eventName) &&
        ((a.metadata.is_ecommerce = !0), dm(a, P.da), dm(a, P.xa));
      dm(a, P.Ue);
      for (var jt = a.D(P.Pe) || [], sl = 0; sl < jt.length; sl++) {
        var kt = jt[sl];
        if (kt.rule_result) {
          dm(a, P.Ue, kt.traffic_type);
          hA(3);
          break;
        }
      }
      if (a.D(P.aa)) {
        var lt = EA(a) || {},
          UB =
            (Ok(lt[P.Zb], !!lt[P.U]) ? Fk(!0)._fplc : void 0) ||
            (0 < Xi("FPLC", void 0, void 0, P.T).length ? void 0 : "0");
        a.F._fplc = UB;
      }
      if (void 0 !== a.D(P.Id)) dm(a, P.Id);
      else {
        var mt = a.D(P.Kd),
          tl,
          Eh;
        a: {
          if (JA) {
            var ul = EA(a) || {};
            if (ul && ul[P.U])
              for (var nt = QA(a), Fh = ul[P.U], Ef = 0; Ef < Fh.length; Ef++)
                if (Fh[Ef] instanceof RegExp) {
                  if (Fh[Ef].test(nt)) {
                    Eh = !0;
                    break a;
                  }
                } else if (0 <= nt.indexOf(Fh[Ef])) {
                  Eh = !0;
                  break a;
                }
          }
          Eh = !1;
        }
        var Gh;
        if (!(Gh = Eh))
          if (RA) Gh = !1;
          else {
            var VB = QA(a),
              Hh;
            var vl = String(a.D(P.wa));
            if ("none" !== vl)
              if ("auto" !== vl) Hh = vl;
              else {
                if (!TA) {
                  for (
                    var ot = String(a.D(P.ib)), Ff = cj(), se = 0;
                    se < Ff.length;
                    se++
                  )
                    if ("none" !== Ff[se]) {
                      var pt = String(a.D(P.Oa)) + "_ga_autodomain";
                      if (
                        0 === fj(pt, SA, { cb: P.T, domain: Ff[se], path: ot })
                      ) {
                        fj(pt, void 0, { cb: P.T, domain: Ff[se], path: ot });
                        UA = Ff[se];
                        break;
                      }
                    }
                  TA = !0;
                }
                Hh = UA;
              }
            else Hh = void 0;
            var qt = Hh;
            Gh = qt ? 0 <= VB.indexOf(qt) : !1;
          }
        if (!(tl = Gh)) {
          var Ih;
          if ((Ih = mt))
            a: {
              for (
                var rt = mt.include_conditions || [], WB = QA(a), wl = 0;
                wl < rt.length;
                wl++
              )
                if (rt[wl].test(WB)) {
                  Ih = !0;
                  break a;
                }
              Ih = !1;
            }
          tl = Ih;
        }
        tl && ((a.F[P.Id] = "1"), hA(4));
      }
      if (a.Ca() && yi()) {
        a.F._rnd = oj();
      }
      if (a.eventName == P.Ua) {
        var st = a.D(P.Ya),
          XB = a.D(P.kb),
          tt = void 0;
        tt = a.F[st];
        XB(tt || a.D(st));
        a.abort();
      }
      if (!a.s.eventMetadata.syn_or_mod) {
        var xl = a.D(P.Ie);
        if (xl) {
          var fd = mc(a.Z);
          mc(a.F, fd);
          for (
            var ut = xl.edit_rules || [], vt = !1, yl = 0;
            yl < ut.length;
            yl++
          ) {
            var Jh;
            a: {
              var gd = a,
                Dd = ut[yl];
              if (
                zx(
                  gd.eventName,
                  fd,
                  Dd.event_name_predicate,
                  Dd.conditions || []
                )
              ) {
                if (Dd.new_event_name) {
                  var wt = m(Dd.new_event_name)
                    ? String(Dd.new_event_name)
                    : wx(gd.eventName, fd, Dd.new_event_name);
                  if (jA(wt)) {
                    Jh = !1;
                    break a;
                  }
                  gd.eventName = String(wt);
                }
                kA(gd.eventName, fd, Dd);
                var xt = !0;
                xt = !1;
                hA(2);
                if (xt) {
                  var zl = {},
                    yt = {
                      eventMetadata:
                        ((zl.syn_or_mod = !0),
                        (zl.is_external_event = !!gd.s.eventMetadata
                          .is_external_event),
                        zl),
                    },
                    zt = hg();
                  zt && (yt.eventMetadata.event_usage = zt);
                  Sr(gd.eventName, fd, gd.Ba, yt);
                  gd.abort();
                }
                Jh = !0;
              } else Jh = !1;
            }
            Jh && (vt = !0);
          }
          for (
            var At = xl.synthesis_rules || [], Al = 0;
            Al < At.length;
            Al++
          ) {
            var Bt = a,
              Gf = At[Al];
            if (
              zx(Bt.eventName, fd, Gf.event_name_predicate, Gf.conditions || [])
            ) {
              var Bl = Gf.new_event_name;
              if (!jA(Bl)) {
                var Ct = Gf.merge_source_event_params ? mc(fd) : {};
                kA(Bl, Ct, Gf);
                var Dt = {},
                  YB = { eventMetadata: ((Dt.syn_or_mod = !0), Dt) };
                Sr(Bl, Ct, Bt.Ba, YB);
                hA(1);
              }
            }
          }
          if (vt) {
            var Cl = {},
              Et = {
                eventMetadata:
                  ((Cl.syn_or_mod = !0),
                  (Cl.is_external_event = !!a.s.eventMetadata
                    .is_external_event),
                  Cl),
              },
              Ft = hg();
            Ft && (Et.eventMetadata.event_usage = Ft);
            Sr(a.eventName, fd, a.Ba, Et);
            a.abort();
          }
        }
      }
      hm(a);
      var Dl = a.metadata.event_usage;
      if (Ea(Dl)) for (var El = 0; El < Dl.length; El++) hA(Dl[El]);
      var Gt = gg("GA4_EVENT");
      Gt && (a.F._eu = Gt);
      PB(a);
      var $B = this.zh,
        Ht = this.g,
        Fl;
      var Gl = DA(a);
      Gl ? (zA(Gl, a) || (ig(25), a.abort()), (Fl = Gl)) : (Fl = void 0);
      var aC = Fl,
        Kh;
      var Gc;
      Gc = rA ? a.F[P.sa] : a.Z[P.sa];
      Ht && Gc === Ht
        ? (Kh = Gc)
        : Gc
        ? ((Gc = "" + Gc),
          wA(Gc, a) || (ig(31), a.abort()),
          qA(Gc, Li(P.T)),
          (Kh = Gc))
        : (ig(32), a.abort(), (Kh = ""));
      $B.call(this, { clientId: Kh, Eh: aC });
      this.qk(a);
      if (a.Ca()) {
        var bC = EB[1] ? a.metadata.is_conversion : a.vb;
        ("page_view" === a.eventName || bC) && FB(this, a);
      }
      this.C.Rf();
      this.vb = QB(a, this.vb);
      a.D(P.Se) && ((a.F[P.Se] = !0), DB(a, P.Te)), dm(a, P.lg);
      this.Yg(a);
      a.s.onSuccess();
    } catch (hC) {
      a.s.onFailure();
    }
    delete eg.GA4_EVENT;
  };
  l.Yg = function (a) {
    this.ma.add(a);
  };
  l.zh = function (a) {
    var b = a.clientId,
      c = a.Eh;
    b && c && ((this.g = b), (this.B = c));
  };
  l.flush = function () {
    this.ma.flush();
  };
  l.qk = function (a) {
    var b = this;
    if (!this.R) {
      var c = Li(P.T);
      Ni([P.T], function () {
        var d = Li(P.T);
        if (c ^ d && b.o && b.B && b.g) {
          var e = b.g;
          if (d) {
            var f = !0;
            f = !1;
            var g = uA(b.o);
            if (g) {
              b.g = g;
              var h = AA(b.o);
              f || h ? (b.B = h) : zA(b.B, b.o);
            } else wA(b.g, b.o), qA(b.g, !0), zA(b.B, b.o);
            var k = {};
            k[P.Oe] = e;
            if (jm[13]) {
              var n = ep(b.I, P.Ac, k);
              hp(n, a.s.eventId, {});
            } else Rr(P.Ac, k, b.I, { fromContainerExecution: !0 });
          } else {
            b.B = void 0;
            b.g = void 0;
            z.gaGlobal = {};
          }
          c = d;
        }
      });
      this.R = !0;
    }
  };
  l.Fi = function (a) {
    a.eventName !== P.Ua && this.C.Ei(a);
  };
  var MB = function (a) {
      if (a.D(P.wg)) (a.g = !1), (a.metadata.euid_mode_enabled = !1);
      else {
        var b = function (c) {
          return (
            !!c &&
            ("auto_detect" === c.mode ||
              "selectors" === c.mode ||
              "code" === c.mode)
          );
        };
        EB[1]
          ? (a.metadata.euid_mode_enabled = b(a.getRemoteConfig(P.bc)))
          : (a.g = b(a.getRemoteConfig(P.bc)));
      }
    },
    LB = function (a) {
      if (EB[8]) {
        var b = function (c, d) {
          P.Bg[c] || (a.F[c] = d);
        };
        Ka(a.s.containerConfig, b);
        Ka(a.s.eventModel, b);
      }
    },
    NB = function (a) {
      var b = a.s.getKeysFromFirstOfAnyScope([
          P.Cc,
          P.vd,
          P.wd,
          P.xd,
          P.yd,
          P.zd,
          P.Ad,
        ]),
        c = function (d, e) {
          IB[d] && (a.F[d] = e);
        };
      lc(b[P.Cc])
        ? Ka(b[P.Cc], function (d, e) {
            c((P.Cc + "_" + d).toLowerCase(), e);
          })
        : Ka(b, c);
    },
    OB = function (a) {
      var b = function (c) {
        return !!c && c.conversion;
      };
      EB[1] ? (a.metadata.is_conversion = b(a.Jb())) : (a.vb = b(a.Jb()));
      if (EB[1] ? a.metadata.is_first_visit : a.cc)
        EB[1]
          ? (a.metadata.is_first_visit_conversion = b(a.Jb("first_visit")))
          : (a.Lg = b(a.Jb("first_visit")));
      if (EB[1] ? a.metadata.is_session_start : a.B)
        EB[1]
          ? (a.metadata.is_session_start_conversion = b(a.Jb("session_start")))
          : (a.Ug = b(a.Jb("session_start")));
    },
    PB = function (a) {
      var b = Object.keys(EB);
      if (b.length) {
        b.forEach(function (d) {
          EB[d] && fg("CCD", Number(d));
        });
        var c = gg("CCD");
        c && (a.cf = "ccd." + c);
      }
    },
    QB = function (a, b) {
      var c = void 0;
      return c;
    };
  function KB(a) {
    Ka(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[P.Qa] || {};
    Ka(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var TB = function (a) {
      if ("prerender" == I.visibilityState) return !1;
      a();
      return !0;
    },
    ZB = function (a) {
      if (!TB(a)) {
        var b = !1,
          c = function () {
            !b && TB(a) && ((b = !0), Rb(I, "visibilitychange", c), ig(55));
          };
        Qb(I, "visibilitychange", c);
        ig(54);
      }
    };
  var cC = function (a, b, c, d, e) {
      if (jm[13]) {
        var f = ep(a, b, d);
        e = e || {};
        hp(f, c, e);
      } else (e = e || {}), (e.fromContainerExecution = !0), Rr(b, d, a, e);
    },
    dC = function (a, b, c, d, e) {
      if (jm[13]) {
        var f = ep(a, b, d);
        e = e || {};
        e.deferrable = !0;
        hp(f, c, e);
      } else
        (e = e || {}),
          (e.deferrable = !0),
          (e.fromContainerExecution = !0),
          Rr(b, d, a, e);
    },
    fC = function (a, b, c) {
      var d = new JB(a, b);
      ZB(function () {
        eC(a, d, c);
      });
    };
  function eC(a, b, c) {
    var d = b.C,
      e = { eventId: c };
    Qr(a, function (f, g, h, k) {
      b.Vj(g, h, k);
    });
    d.bk(function () {
      Or().flush();
      1e3 <= d.he() &&
        Eb.sendBeacon &&
        (jm[13] ? Rr(P.Ac, {}, a, e) : cC(a, P.Ac, c, {}));
      fA = !0;
      b.flush();
      d.Bh(function () {
        fA = !1;
        d.Bh();
      });
    });
  }
  var X = { h: {} };

  (X.h.read_container_data = ["google"]),
    (function () {
      (function (a) {
        X.__read_container_data = a;
        X.__read_container_data.m = "read_container_data";
        X.__read_container_data.isVendorTemplate = !0;
        X.__read_container_data.priorityOverride = 0;
      })(function () {
        return {
          assert: function () {},
          X: function () {
            return {};
          },
        };
      });
    })();

  (X.h.c = ["google"]),
    (function () {
      (function (a) {
        X.__c = a;
        X.__c.m = "c";
        X.__c.isVendorTemplate = !0;
        X.__c.priorityOverride = 0;
      })(function (a) {
        Eu(a.vtp_value, "c", a.vtp_gtmEventId);
        return a.vtp_value;
      });
    })();
  (X.h.e = ["google"]),
    (function () {
      (function (a) {
        X.__e = a;
        X.__e.m = "e";
        X.__e.isVendorTemplate = !0;
        X.__e.priorityOverride = 0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (X.h.listen_data_layer = ["google"]),
    (function () {
      function a(b, c) {
        return { eventName: c };
      }
      (function (b) {
        X.__listen_data_layer = b;
        X.__listen_data_layer.m = "listen_data_layer";
        X.__listen_data_layer.isVendorTemplate = !0;
        X.__listen_data_layer.priorityOverride = 0;
      })(function (b) {
        var c = b.vtp_accessType,
          d = b.vtp_allowedEvents || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!m(g))
              throw e(f, { eventName: g }, "Event name must be a string.");
            if (!("any" === c || ("specific" === c && 0 <= d.indexOf(g))))
              throw e(
                f,
                { eventName: g },
                "Prohibited listen on data layer event."
              );
          },
          X: a,
        };
      });
    })();

  (X.h.v = ["google"]),
    (function () {
      (function (a) {
        X.__v = a;
        X.__v.m = "v";
        X.__v.isVendorTemplate = !0;
        X.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = wu(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        Eu(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();
  (X.h.get_url = ["google"]),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        X.__get_url = b;
        X.__get_url.m = "get_url";
        X.__get_url.isVendorTemplate = !0;
        X.__get_url.priorityOverride = 0;
      })(function (b) {
        var c = "any" === b.vtp_urlParts ? null : [];
        c &&
          (b.vtp_protocol && c.push("protocol"),
          b.vtp_host && c.push("host"),
          b.vtp_port && c.push("port"),
          b.vtp_path && c.push("path"),
          b.vtp_extension && c.push("extension"),
          b.vtp_query && c.push("query"),
          b.vtp_fragment && c.push("fragment"));
        var d =
            c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, h) {
            if (g) {
              if (!m(g)) throw e(f, {}, "URL component must be a string.");
              if (c && 0 > c.indexOf(g))
                throw e(f, {}, "Prohibited URL component: " + g);
              if ("query" === g && d) {
                if (!h)
                  throw e(
                    f,
                    {},
                    "Prohibited from getting entire URL query when query keys are specified."
                  );
                if (!m(h)) throw e(f, {}, "Query key must be a string.");
                if (0 > d.indexOf(h))
                  throw e(f, {}, "Prohibited query key: " + h);
              }
            } else if (c)
              throw e(
                f,
                {},
                "Prohibited from getting entire URL when components are specified."
              );
          },
          X: a,
        };
      });
    })();

  (X.h.process_dom_events = ["google"]),
    (function () {
      function a(b, c, d) {
        return { targetType: c, eventName: d };
      }
      (function (b) {
        X.__process_dom_events = b;
        X.__process_dom_events.m = "process_dom_events";
        X.__process_dom_events.isVendorTemplate = !0;
        X.__process_dom_events.priorityOverride = 0;
      })(function (b) {
        for (
          var c = b.vtp_targets || [],
            d = b.vtp_createPermissionError,
            e = {},
            f = 0;
          f < c.length;
          f++
        ) {
          var g = c[f];
          e[g.targetType] = e[g.targetType] || [];
          e[g.targetType].push(g.eventName);
        }
        return {
          assert: function (h, k, n) {
            if (!e[k]) throw d(h, {}, "Prohibited event target " + k + ".");
            if (-1 === e[k].indexOf(n))
              throw d(
                h,
                {},
                "Prohibited listener registration for DOM event " + n + "."
              );
          },
          X: a,
        };
      });
    })();

  (X.h.gct = ["google"]),
    (function () {
      function a(e) {
        for (var f = [], g = 0; g < e.length; g++)
          try {
            f.push(new RegExp(e[g]));
          } catch (h) {}
        return f;
      }
      function b(e) {
        return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
      }
      function c(e) {
        for (var f = [], g = 0; g < e.length; g++) {
          var h = e[g].matchValue,
            k;
          switch (e[g].matchType) {
            case "BEGINS_WITH":
              k = "^" + b(h);
              break;
            case "ENDS_WITH":
              k = b(h) + "$";
              break;
            case "EQUALS":
              k = "^" + b(h) + "$";
              break;
            case "REGEX":
              k = h;
              break;
            default:
              k = b(h);
          }
          f.push(k);
        }
        return f;
      }
      var d = !1;
      (function (e) {
        X.__gct = e;
        X.__gct.m = "gct";
        X.__gct.isVendorTemplate = !0;
        X.__gct.priorityOverride = 0;
      })(function (e) {
        var f = {},
          g = e.vtp_sessionDuration;
        0 < g && (f[P.Jc] = g);
        f[P.Dd] = e.vtp_eventSettings;
        f[P.Ie] = e.vtp_dynamicEventSettings;
        f[P.lb] = 1 === e.vtp_googleSignals;
        f[P.Gd] = e.vtp_foreignTld;
        f[P.Gc] = 1 === e.vtp_restrictDomain;
        f[P.Pe] = e.vtp_internalTrafficResults;
        var h = P.ya,
          k = e.vtp_linker;
        k && k[P.U] && (k[P.U] = a(k[P.U]));
        f[h] = k;
        var n = P.Kd,
          p = e.vtp_referralExclusionDefinition;
        p &&
          p.include_conditions &&
          (p.include_conditions = a(p.include_conditions));
        f[n] = p;
        var q = e.vtp_trackingId,
          r = Vr(q),
          t = r.referral_exclusion_conditions;
        t &&
          (t.length && "object" === typeof t[0] && (t = c(t)),
          (f[P.Kd] = { include_conditions: a(t) }));
        var u = r.cross_domain_conditions;
        if (u) {
          u.length && "object" === typeof u[0] && (u = c(u));
          var v = {};
          f[P.ya] =
            ((v[P.U] = a(u)),
            (v[P.ac] = !0),
            (v[P.Zb] = !0),
            (v[P.Hc] = "query"),
            v);
        }
        fC(q, f, e.vtp_gtmEventId);
        if (d) {
          var x = sj();
          Or(!0).notifyContainerLoaded(q, x);
        }
        J(e.vtp_gtmOnSuccess);
      });
    })();

  (X.h.get = ["google"]),
    (function () {
      (function (a) {
        X.__get = a;
        X.__get.m = "get";
        X.__get.isVendorTemplate = !0;
        X.__get.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_settings,
          c = b.eventParameters || {},
          d = String(a.vtp_eventName),
          e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        (a.vtp_deferrable ? dC : cC)(String(b.streamId), d, e.eventId, c, e);
        a.vtp_gtmOnSuccess();
      });
    })();

  var gC = {};
  gC.dataLayer = ah;
  gC.callback = function (a) {
    Sg.hasOwnProperty(a) && Ca(Sg[a]) && Sg[a]();
    delete Sg[a];
  };
  gC.bootstrap = 0;
  gC._spx = !1;
  (function (a) {
    if (!z["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (I.referrer) {
        var c = yh(I.referrer);
        b = "cct.google" === vh(c, "host");
      }
      if (!b) {
        var d = Xi("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((z["__TAGGY_INSTALLED"] = !0),
        Lb("https://cct.google/taggy/agent.js"));
    }
    var f = function (q) {
        var r = "GTM",
          t = "GTM";
        (r = "OGT"), (t = "GTAG");
        var u = z["google.tagmanager.debugui2.queue"];
        u ||
          ((u = []),
          (z["google.tagmanager.debugui2.queue"] = u),
          Lb(
            "https://" +
              Hg.yc +
              "/debug/bootstrap?id=" +
              Ge.J +
              "&src=" +
              t +
              "&cond=" +
              q +
              "&gtm=" +
              zj()
          ));
        var v = {
          messageType: "CONTAINER_STARTING",
          data: { scriptSource: Fb, containerProduct: r, debug: !1, id: Ge.J },
        };
        v.data.resume = function () {
          a();
        };
        Hg.Sh && (v.data.initialPublish = !0);
        u.push(v);
      },
      g = void 0,
      h = wh(z.location, "query", !1, void 0, "gtm_debug");
    Ot(h) && (g = 2);
    if (!g && I.referrer) {
      var k = yh(I.referrer);
      "tagassistant.google.com" === vh(k, "host") && (g = 3);
    }
    if (!g) {
      var n = Xi("__TAG_ASSISTANT");
      n.length && n[0].length && (g = 4);
    }
    if (!g) {
      var p = I.documentElement.getAttribute("data-tag-assistant-present");
      Ot(p) && (g = 5);
    }
    g && Fb ? f(g) : a();
  })(function () {
    var a = !1;
    a && Do("INIT");
    mi().o();
    Wj();
    Pk.enable_gbraid_cookie_write = !0;
    var b = !!S[Ge.J];
    !b && Ge.xc && (b = !!S["ctid_" + Ge.xc]);
    if (b) {
      var c = S.zones;
      c && c.unregisterChild(rj());
    } else {
      for (var d = sj(), e = 0; e < d.length; e++) {
        var f = d[e],
          g = Ge.J;
        S.addDestinationToContainer
          ? S.addDestinationToContainer(f, g)
          : ((S.pendingDestinationIds = S.pendingDestinationIds || []),
            S.pendingDestinationIds.push([f, g]));
      }
      for (
        var h = data.resource || {}, k = h.macros || [], n = 0;
        n < k.length;
        n++
      )
        fe.push(k[n]);
      for (var p = h.tags || [], q = 0; q < p.length; q++) ie.push(p[q]);
      for (var r = h.predicates || [], t = 0; t < r.length; t++) he.push(r[t]);
      for (var u = h.rules || [], v = 0; v < u.length; v++) {
        for (var x = u[v], y = {}, w = 0; w < x.length; w++)
          y[x[w][0]] = Array.prototype.slice.call(x[w], 1);
        ge.push(y);
      }
      ke = X;
      le = gv;
      Ke = new Je();
      var A = data.sandboxed_scripts,
        B = data.security_groups,
        C = data.runtime || [],
        E = data.runtime_lines;
      Jy = new Gd();
      My();
      ee = Ky();
      var F = Jy,
        D = Gy();
      jb(F.g, "require", D);
      for (var O = 0; O < C.length; O++) {
        var N = C[O];
        if (!Ea(N) || 3 > N.length) {
          if (0 === N.length) continue;
          break;
        }
        E && E[O] && E[O].length && ve(N, E[O]);
        Jy.execute(N);
      }
      if (void 0 !== A)
        for (var R = ["sandboxedScripts"], Z = 0; Z < A.length; Z++) {
          var Q = A[Z].replace(/^_*/, "");
          Tg[Q] = R;
        }
      Ny(B);
      S[Ge.J] = gC;
      Ge.xc && (S["ctid_" + Ge.xc] = gC);
      for (var K = uj(), Y = rj(), ba = 0; ba < Y.length; ba++)
        K.container[Y[ba]] = !0;
      for (var T = sj(), oa = 0; oa < T.length; oa++) K.destination[T[oa]] = !0;
      K.canonical[Ge.xc] = !0;
      Ua(Tg, X.h);
      ne = Ce;
      Nt();
      no = !1;
      oo = 0;
      if (
        ("interactive" == I.readyState && !I.createEventObject) ||
        "complete" == I.readyState
      )
        qo();
      else {
        Qb(I, "DOMContentLoaded", qo);
        Qb(I, "readystatechange", qo);
        if (I.createEventObject && I.documentElement.doScroll) {
          var ua = !0;
          try {
            ua = !z.frameElement;
          } catch (Nb) {}
          ua && ro();
        }
        Qb(z, "load", qo);
      }
      As = !1;
      "complete" === I.readyState ? Cs() : Qb(z, "load", Cs);
      fo();
      Rg = Ra();
      gC.bootstrap = Rg;
      if (a) {
        var pc = Eo("INIT");
      }
    }
  });
})();
