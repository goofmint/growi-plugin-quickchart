export interface Options {
  adminPreferredIndentSize: number;
  attrWhitelist: object;
  drawioUri: string;
  highlightJsStyleBorder: boolean;
  isEnabledLinebreaks: boolean;
  isEnabledLinebreaksInComments: boolean;
  isEnabledMarp: boolean;
  isEnabledXssPrevention: boolean;
  isIndentSizeForced: boolean;
  plantumlUri: string;
  tagWhitelist: string[];
  xssOption : string;
}

export type Func = (props: any) => void;

export interface ViewOptions {
  components: {
    a: React.FunctionComponent<any>;
    attachment: React.FunctionComponent<any>;
    code: React.FunctionComponent<any>;
    drawio: React.FunctionComponent<any>;
    gallery: React.FunctionComponent<any>;
    h1: React.FunctionComponent<any>;
    h2: React.FunctionComponent<any>;
    h3: React.FunctionComponent<any>;
    h4: React.FunctionComponent<any>;
    h5: React.FunctionComponent<any>;
    h6: React.FunctionComponent<any>;
    img: React.FunctionComponent<any>;
    mermaid: React.FunctionComponent<any>;
    ref: React.FunctionComponent<any>;
    refimg: React.FunctionComponent<any>;
    refs: React.FunctionComponent<any>;
    refsimg: React.FunctionComponent<any>;
    table: React.FunctionComponent<any>;
  },
  remarkPlugins: [func: Func, options: any][] | Func[],
  rehypePlugins: [func: Func, options: any][] | Func[],
  remarkRehypeOptions: {
    allowDangerousHtml: boolean,
    clobberPrefix: string,
  }
}
