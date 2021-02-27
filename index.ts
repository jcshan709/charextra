import chalk = require('chalk');
class charextra {
  public sqrt: String = '√';
  public check: String = chalk`{green ${this.sqrt}}`;
  public X: String = chalk`{red X}`;
  public failed: String = this.X;
  public invaild: String = this.X;
  public happy: String = ':-)';
  public sad: String = ':-(';
  public laugh: String = ':-D';
  public fatal: String = chalk`{red {bold FATAL}}`;
  public error: String = chalk`{red ERROR}`;
  public warn: String = chalk`{yellow WARN}`;
  public info: String = chalk`{green INFO}`;
}
export = new charextra();