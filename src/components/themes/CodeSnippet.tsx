import { Colors } from '@/lib/definitions'

const CodeSnippet = ({ colors }: { colors: Colors }) => (
  <pre className="h-full overflow-auto p-4 text-sm leading-relaxed" style={{ backgroundColor: colors.background, color: colors.foreground }}>
    <code>
      <span style={{ color: colors.keyword }}>function</span> <span style={{ color: colors.function }}>fibonacci</span>(n: <span style={{ color: colors.variable }}>number</span>): <span style={{ color: colors.variable }}>number</span> {'{'}
      {'\n'}
      {'  '}<span style={{ color: colors.keyword }}>if</span> (n {'<='} 1) <span style={{ color: colors.keyword }}>return</span> n;
      {'\n'}
      {'  '}<span style={{ color: colors.keyword }}>return</span> fibonacci(n - 1) + fibonacci(n - 2);
      {'\n'}
      {'}'}
      {'\n'}
      {'\n'}
      <span style={{ color: colors.comment }}>\/\/ Calculate the 10th Fibonacci number</span>
      {'\n'}
      <span style={{ color: colors.keyword }}>const</span> <span style={{ color: colors.variable }}>result</span> = fibonacci(10);
      {'\n'}
      <span style={{ color: colors.function }}>console.log</span>(<span style={{ color: colors.string }}>&quotThe 10th Fibonacci number is:&quot</span>, result);
    </code>
  </pre>
)

export default CodeSnippet
