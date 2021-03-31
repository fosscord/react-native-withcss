export interface Rule {
	/** The list of selectors of the rule, split on commas. Each selector is trimmed from whitespace and comments. */
	selectors?: Array<string>;
	/** Array of nodes with the types declaration and comment. */
	declarations?: Array<
		| {
				/** The property name, trimmed from whitespace and comments. May not be empty. */
				property?: string;
				/** The value of the property, trimmed from whitespace and comments. Empty values are allowed. */
				value?: string;
		  }
		| {
				comment?: string;
		  }
	>;
	type?: string;
	/** A reference to the parent node, or null if the node has no parent. */
	parent?: Node;
	/** Information about the position in the source string that corresponds to the node. */
	position?: {
		start?: Position;
		end?: Position;
		/** The value of options.source if passed to css.parse. Otherwise undefined. */
		source?: string;
		/** The full source string passed to css.parse. */
		content?: string;
	};
}

export interface Position {
	line?: number;
	column?: number;
}

export interface Selector {
	tag?: string;
	id?: string;
	classes: string[];
}

export interface Rules {
	selectors?: Selector[][];
	declarations?: Record<string, string>;
	rules?: Rule[];
	media?: string;
	type: string;
}
