export class EndPoints {
  public static CREATE_UPDATE_CUSTOMER = 'sys/customer/create-update';
  public static LOAD_ALL_CUSTOMERS = 'sys/customer/load-all';
  public static LOAD_CUSTOMER_BY_ID = 'sys/customer/load-by-id';
  public static CREATE_UPDATE_CATEGORY = 'sys/category/create-update';
  public static CREATE_UPDATE_SUB_CATEGORY = 'sys/category/create-update-sub';
  public static CATEGORY_LOAD_ALL = 'sys/category/load-all';
  public static CATEGORY_REMOVE = 'sys/category/remove-cat';
  public static SUB_CATEGORY_REMOVE = 'sys/category/remove-sub-cat';
  public static SUB_CATEGORY_LOAD_ALL = 'sys/category/load-all-sub';
  public static PRODUCT_LOAD_ALL = 'sys/product/load-all';
  public static PRODUCT_LOAD_BY_ID = 'sys/product/load-by-id';
  public static CREATE_UPDATE_PRODUCT = 'sys/product/create-update';

  public static CREATE_UPDATE_SUPPLIER = 'sys/vendor/create-update';
  public static LOAD_ALL_SUPPLIER = 'sys/vendor/load-all';
  public static LOAD_SUPPLIER_BY_ID = 'sys/vendor/load-by-id';

  public static CREATE_UPDATE_PURCHASE_ORDER = 'sys/po/create-update';
  public static LOAD_ALL_PURCHASE_ORDERS = 'sys/po/load-all';
  public static LOAD_ALL_PRODUCTS_FOR_CATEGORY_ID = 'sys/product/load-by-cat-id';
  public static BLOCK_PRODUCT = 'sys/product/block';

  public static CREATE_BRANDS = 'sys/brand/create-update';
  public static LOAD_ALL_BRANDS = 'sys/brand/load-all';
  public static LOAD_ALL_BRANDS_LIST = 'sys/brand/load-all-list';
  public static LOAD_ALL_ACTIVITIES = 'sys/recent/load-all';
  public static LOAD_STOCK = 'sys/stock/load-all';
  public static LOAD_STOCK_AS_GROUP = 'sys/stock/load-all-by-group';
  public static LOAD_STOCK_BY_PRODUCT = 'sys/stock/load-by-product';

  public static CREATE_UPDATE_SALE = 'sys/sales/create-update';
  public static LOAD_ALL_SALES = 'sys/sales/load-all';
  public static LOAD_BY_BARCODE = 'sys/product/load-by-barcode';
  public static SALE_LOAD_BY_ID = 'sys/sales/load-by-id';

  public static GET_SUPPLIER_COUNT = 'sys/vendor/get-count';
  public static GET_CUSTOMER_COUNT = 'sys/customer/get-count';
  public static GET_PRODUCT_COUNT = 'sys/sales/load-all';

  public static SUPPLIER_SEARCH = 'sys/search/supplier';
  public static CUSTOMER_SEARCH = 'sys/search/customer';
  public static PRODUCT_SEARCH = 'sys/search/product';
  public static CATEGORY_SEARCH = 'sys/search/category';
  public static SUB_CATEGORY_SEARCH = 'sys/search/sub-category';
  public static SALES_SEARCH = 'sys/search/sales';
  public static USERS_SEARCH = 'sys/search/user';
  public static PO_SEARCH = 'sys/search/purchase-orders';
  public static STOCK_SEARCH = 'sys/search/stock';

  public static USER_LOGIN = 'user/login';
  public static USER_CREATE = 'user/create-update';
  public static LOAD_BY_COMPANY = 'user/load-by-company';

  public static MANAGEMENT = 'sys/account/daily-in-ex';
  public static STATUS_LOAD_ALL = 'sys/status/load-all';
  public static STAT_DATA = 'sys/stat/load-all';
  public static CHART_DATA = 'sys/stat/load-analytic-data';

  public static TOS_LOAD = 'sys/tos/load-for-company';
  public static TOS_CREATE = 'sys/tos/create-update';
  public static TOS_REMOVE = 'sys/tos/remove-for-company';

  public static LOAD_PRIVILEGES = 'sys/privilege/load-all';
  public static ASSIGN_PRIVILEGES = 'sys/privilege/assign';

  public static CREATE_COMPANY = 'sys/company/create';
  public static UPDATE_COMPANY = 'sys/company/update';
  public static LOAD_COMPANY_BY_ID = 'sys/company/load-by-id';


  public static DELETE_SUPPLIER = 'sys/vendor/remove';
  public static DELETE_CUSTOMER = 'sys/customer/remove';
  public static DELETE_PRODUCT = 'sys/product/remove';

}
