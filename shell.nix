with import <nixpkgs> {};
mkShell {
  PROJECT_DIR = toString ./.;
  packages = [
    yarn
    nodejs_21
    nodePackages.wrangler
  ];
}
