# EP Lab Action

This repository contains a small JavaScript action. GitHub reads [action.yml](action.yml) and executes the committed `dist/index.js` bundle.

## First GitHub exercise

1. Open the [demo workflow](.github/workflows/demo.yml) in GitHub.
2. Edit `project: help` to `project: billing` in the GitHub web editor.
3. Commit directly to `main`.
4. Open the repository's **Actions** tab and select the new **Demo local action** run.

The log from the **Run the action from this checkout** step should say `Hello billing — lab v1` and show Node 24.

## Next exercise: source versus bundle

Change `src/index.ts` from `lab v1` to `lab v2`, commit only that source change, and run the workflow. The log still says `lab v1`: GitHub executes `dist/index.js`, not TypeScript source.

Run `npm run build:action`, commit the changed `dist/index.js`, and run again. It will then say `lab v2`.

When this action is used from another repository, that repository does not run automatically when this repository changes. The consumer has to update its `uses:` reference or be triggered separately.
