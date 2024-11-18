const fs = require("fs-extra");
const path = require("path");

const projectRoot = path.join(__dirname, "src");

const structure = {
  components: {
    Admin: [
      "AddBookForms.js",
      "ManagerBooksTable.js",
      "OrderDetailsModal.js",
      "OrdersTable.js",
      "TableRow.js",
    ],
    Navbar: [
      "Navbar.js",
      "HamburgerIcon.js",
      "Logo.js",
      "NavLinks.js",
      "Search.js",
      "SearchInput.js",
      "SearchedItems.js",
    ],
    UI: ["Spinner.js", "Button.js", "Modal.js"],
  },
  features: {
    Books: {
      components: ["BookCard.js", "BooksCardsContainer.js", "RatingTable.js"],
      pages: ["CategoryPage.js", "ProductPage.js"],
    },
    Cart: {
      components: ["CartContainer.js", "CartProducts.js", "CartTotals.js"],
      pages: ["Cart.js"],
    },
    Checkout: {
      components: ["OrderPricesSummery.js", "PlaceOrderButton.js"],
      pages: ["Checkout.js"],
    },
  },
  contexts: ["CheckoutContext.js", "NavContext.js"],
  styles: [
    "BooksCardsContainer.css",
    "Dashboard.css",
    "home.css",
    "Login.css",
    "Navbar.css",
    "ProductPage.css",
    "Register.css",
  ],
  utils: ["validator.js", "api.js"],
};

// Move files based on the structure
const moveFiles = (destination, files) => {
  files.forEach((file) => {
    const srcPath = path.join(projectRoot, file);
    const destPath = path.join(projectRoot, destination, file);

    if (fs.existsSync(srcPath)) {
      fs.ensureDirSync(path.dirname(destPath));
      fs.moveSync(srcPath, destPath, { overwrite: true });
      console.log(`Moved ${file} -> ${destination}`);
    } else {
      console.warn(`File not found: ${file}`);
    }
  });
};

// Apply restructuring
for (const [folder, content] of Object.entries(structure)) {
  if (Array.isArray(content)) {
    // If content is an array, move files directly
    moveFiles(folder, content);
  } else {
    // If content is an object, handle subfolders
    for (const [subfolder, files] of Object.entries(content)) {
      const destination = path.join(folder, subfolder);
      moveFiles(destination, files);
    }
  }
}

console.log("Project restructuring completed!");
