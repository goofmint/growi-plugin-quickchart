const URL = 'https://quickchart.io/chart';
const WIDTH = '100%';
const HEIGHT = 'auto';

export const QuickChart = (Tag: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, className, ...props }) => {
    if (className !== 'language-quickchart') {
      return (
        <Tag {...props}>{children}</Tag>
      );
    }
    const json = JSON.parse(children);
    const { url, width, height } = json;
    ['url', 'width', 'height'].forEach(key => delete json[key]);
    return (
      <img
        src={`${url || URL}?c=${JSON.stringify(json)}`}
        width={width || WIDTH}
        height={height || HEIGHT}
      />
    );
  };
};
