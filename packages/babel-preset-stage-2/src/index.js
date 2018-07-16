export default function() {
  throw new Error(`
As of v7.0.0-beta.52, we've decided to remove
the official Babel Stage presets. You can find more information
at issue #7770: https://github.com/babel/babel/issues/7770, but
the TL;DR is that it's causing more harm than convenience in that
the preset is always out of date, each change is usually going to
require a major version bump and thus people will be behind,
and it encouraged too many people to opt-in to too many proposals
that they didn't intend to.

If you want the same configuration as before, you can use this configuration,
although keep in mind that Stage 1 contains Stage 2 which is also deprecated.

{
  presets: [["@babel/preset-stage-3", { loose, useBuiltIns }]],
  plugins: [
   ["@babel/plugin-proposal-decorators", { legacy: decoratorsLegacy }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
  ]
}

This will be the last publish of "@babel/preset-stage-2", and it won't be
in the final release.

If it's a hassle to maintain, you can certainly make your own preset to use
across projects, or there might be one in the community to use.
`);
}
