#!/usr/bin/env bash

set -euo pipefail

# Always run the workflow on the default branch
if [ "${GITHUB_REF}" = "refs/heads/${DEFAULT_BRANCH}" ]; then
  echo "::set-output name=ok::true"
  exit 0
fi

# Validate the current branch to have no conflict with the default branch
if ! echo "${GITHUB_REF}" | perl -ne 'exit 1 if !/^refs\/pull\/[0-9]+\/merge/'; then
  printf "pull request has conflict\n"
  exit 1
fi

# Pass running the workflow when the current branch has no changes in concern like ones of application code
git fetch origin "${DEFAULT_BRANCH}"
ok=$(git diff "origin/${DEFAULT_BRANCH}" HEAD --name-only |
  perl -ne 'BEGIN{$res=""} $res="true" if /rc$/ || /\.(js|jsx|ts|tsx|css|scss|json|lock)$/ || /^\.github\/workflows\/.+\.yml$/ ;END{print $res}')
echo "::set-output name=ok::${ok}"
