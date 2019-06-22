export class GlobalValidators {

  // public static VALIDATOR_EMAIL = '^\\w+@[a-zA-Z_.]+?\\.[a-zA-Z]{2,3}$';
  public static VALIDATOR_NAME = '^[a-zA-Z\\s]{0,200}';
  public static VALIDATOR_EMAIL = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$';
  public static VALIDATOR_PHONE = '[0-9]{9,10}';
  public static VALIDATOR_NIC = 'http://192.168.8.104:8080/inventory/';
  public static VALIDATOR_WEBSITE = '^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$';
  public static VALIDATOR_ZIP_CODE = '([0-9]{5})';

}
