FROM gitpod/workspace-full

# Instala as versões estáveis do Node.js e npm
ENV NODE_VERSION=18.16.0
RUN curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash \
    && bash -c ". ~/.nvm/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm use $NODE_VERSION \
    && nvm alias default $NODE_VERSION"

# Configura o ambiente Node.js
ENV PATH=$PATH:/home/gitpod/.nvm/versions/node/v$NODE_VERSION/bin

# Instala ferramentas úteis
RUN sudo apt-get update && \
    sudo apt-get install -y \
    curl \
    git \
    && sudo rm -rf /var/lib/apt/lists/*