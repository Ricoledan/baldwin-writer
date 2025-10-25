{
  description = "BMAD-METHOD AI Agent Framework Development Environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Node.js v20+ required for BMAD-METHOD
            nodejs_20

            # Package managers
            nodePackages.npm

            # Useful development tools
            git

            # Optional: helpful for debugging
            nodePackages.node-gyp
          ];

          shellHook = ''
            echo "🚀 BMAD-METHOD Development Environment"
            echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
            echo "Node.js version: $(node --version)"
            echo "npm version: $(npm --version)"
            echo ""
            echo "To install BMAD-METHOD, run:"
            echo "  npx bmad-method install"
            echo ""
            echo "Project: baldwin"
            echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
          '';

          # Set npm to use local node_modules
          NODE_PATH = "./node_modules";
        };

        # Optional: Define a package for the project
        packages.default = pkgs.buildNpmPackage {
          pname = "baldwin";
          version = "0.1.0";

          src = ./.;

          npmDepsHash = ""; # Will be filled after npm install

          meta = with pkgs.lib; {
            description = "BMAD-METHOD AI Agent Framework Implementation";
            license = licenses.mit;
          };
        };
      }
    );
}
