// @ts-nocheck
import ofmFromMarkdown from "@goonco/mdast-util-ofm";
import micromarkOFM from "@goonco/micromark-extension-ofm";

export default function remarkOFM(options) {
	const settings = options;
	const data = self.data();

	const micromarkExtensions =
		data.micromarkExtensions || (data.micromarkExtensions = []);
	const fromMarkdownExtensions =
		data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);

	micromarkExtensions.push(micromarkOFM);
	fromMarkdownExtensions.push(ofmFromMarkdown(settings));
}
