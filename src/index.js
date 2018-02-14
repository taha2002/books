const client = require('frappejs/client');

// start server
client.start({
    columns: 3,
    server: 'localhost:8000'
}).then(() => {

    // require modules
    frappe.modules.todo = require('frappejs/models/doctype/todo/todo.js');
    frappe.modules.number_series = require('frappejs/models/doctype/number_series/number_series.js');
    frappe.modules.account = require('../models/doctype/account/account.js');
    frappe.modules.item = require('../models/doctype/item/item.js');
    frappe.modules.customer = require('../models/doctype/customer/customer.js');
    frappe.modules.invoice = require('../models/doctype/invoice/invoice.js');
    frappe.modules.invoice_item = require('../models/doctype/invoice_item/invoice_item.js');
    frappe.modules.invoice_settings = require('../models/doctype/invoice_settings/invoice_settings.js');

    frappe.modules.todo_client = require('frappejs/models/doctype/todo/todo_client.js');
    frappe.modules.account_client = require('../models/doctype/account/account_client.js');

    frappe.desk.menu.addItem('ToDo', '#list/todo');
    frappe.desk.menu.addItem('Accounts', '#list/account');
    frappe.desk.menu.addItem('Items', '#list/item');
    frappe.desk.menu.addItem('Customers', '#list/customer');
    frappe.desk.menu.addItem('Invoice', '#list/invoice');

    frappe.router.default = '#list/todo';

    frappe.router.show(window.location.hash);
});

module.exports = false;