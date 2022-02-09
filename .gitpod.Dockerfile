FROM gitpod/workspace-full

# Install HasuraCLI
RUN curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash
