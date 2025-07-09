{ pkgs, lib, config, inputs, ... }: {
  dotenv.enable = true;

  enterShell = ''
      echo -e "\033[0;32m"
      cat welcome_banner.txt
      echo -e "\033[0m"
      echo ""
      printf "%-35s %-35s\n" "FRONTEND:"
      printf "%-35s %-35s\n" "  󰎙 Node.js ($(node --version | sed 's/v//'))"
      printf "%-35s %-35s\n" "   TypeScript ($(tsc --version | awk '{print $2}'))"
      printf "%-35s %-35s\n" "   pnpm ($(pnpm --version))"
  '';

  # https://devenv.sh/packages/
  packages = [ 
    pkgs.git 
    pkgs.nodePackages.pnpm
  ];

  languages.typescript.enable = true;
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_latest;
  };
}
