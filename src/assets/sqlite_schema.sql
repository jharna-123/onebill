
CREATE TABLE customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  Loyality Boolean DEFAULT 0, 
);


CREATE TABLE items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  stock INTEGER DEFAULT 0,
  Tax REAL DEFAULT 0,
);


CREATE TABLE bills (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_id INTEGER,
  bill_date TEXT DEFAULT CURRENT_TIMESTAMP,
  total_amount REAL NOT NULL,
  paid_amount REAL NOT NULL,
  payment_method TEXT NOT NULL,
  transaction_status TEXT DEFAULT 'completed',
  transaction_reference TEXT, 
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE bill_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  bill_id INTEGER NOT NULL,
  item_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  price REAL NOT NULL, 
  total REAL NOT NULL, 
  FOREIGN KEY (bill_id) REFERENCES bills(id),
  FOREIGN KEY (item_id) REFERENCES items(id)
);
