// AI-powered functions for code analysis, explanation, and debugging

function analyzeCode(code) {
    const language = detectLanguage(code);
    let analysis = AI Code Analysis (${language}):\n;
    analysis += - Code Length: ${code.length} characters\n;
    analysis += - Number of Lines: ${code.split('\n').length}\n;
    analysis += - Estimated Complexity: ${estimateComplexity(code)}\n;
    analysis += - Code Quality Score: ${calculateQualityScore(code)}/10\n;

    const ast = parseCodeStructure(code, language);
    analysis += - Functions: ${ast.functions.length}\n;
    analysis += - Variables: ${ast.variables.length}\n;
    analysis += - Loops: ${ast.loops.length}\n;
    analysis += - Conditionals: ${ast.conditionals.length}\n;
    analysis += - Classes/Objects: ${ast.classes.length}\n;

    if (ast.functions.length > 0) {
        analysis += - Function Names: ${ast.functions.join(', ')}\n;
    }

    const patterns = detectCodePatterns(code, language);
    if (patterns.length > 0) {
        analysis += - Detected Patterns: ${patterns.join(', ')}\n;
    }

    return analysis;
}

function explainCode(code) {
    let explanation = 'AI Code Explanation:\n';
    const language = detectLanguage(code);
    explanation += This appears to be ${language} code.\n;
    if (code.includes('console.log') || code.includes('print')) {
        explanation += '- It includes output statements to display information.\n';
    }
    if (code.includes('function') || code.includes('def ')) {
        explanation += '- It defines functions, which are reusable blocks of code.\n';
    }
    if (code.includes('if') || code.includes('else')) {
        explanation += '- It uses conditional statements to make decisions.\n';
    }
    if (code.includes('for') || code.includes('while')) {
        explanation += '- It contains loops for repetitive tasks.\n';
    }
    explanation += 'To understand better, break it into smaller parts and analyze each section.\n';
    return explanation;
}

function detectErrors(code) {
    let errors = 'AI Error Detection:\n';
    const language = detectLanguage(code);

    try {
        // Basic syntax check
        if (language === 'JavaScript') {
            new Function(code);
        }
        errors += '✓ No syntax errors detected.\n';
    } catch (e) {
        errors += ✗ Syntax Error: ${e.message}\n;
        errors += 💡 Suggestion: Check for missing brackets, semicolons, or incorrect syntax near the error location.\n;
    }

    // Language-specific error detection
    if (language === 'JavaScript') {
        errors += detectJSErrors(code);
    } else if (language === 'Python') {
        errors += detectPythonErrors(code);
    }

    // General checks
    if (code.includes('undefinedVariable') || code.includes('null.') || code.includes('undefined.')) {
        errors += '⚠ Warning: Possible undefined/null reference usage.\n';
        errors += '💡 Suggestion: Always check if variables are defined before using them.\n';
    }

    if (!code.trim()) {
        errors += '⚠ No code provided for analysis.\n';
    }

    // Add debugging suggestions
    const suggestions = generateDebuggingSuggestions(code, language);
    if (suggestions) {
        errors += '\n🔧 Debugging Suggestions:\n' + suggestions;
    }

    return errors;
}

function detectJSErrors(code) {
    let jsErrors = '';

    if (!code.includes(';') && code.split('\n').length > 1) {
        jsErrors += '💡 Suggestion: Consider using semicolons for better code style.\n';
    }

    if (code.includes('==') && !code.includes('===') && code.split('==').length > code.split('===').length) {
        jsErrors += '💡 Suggestion: Use === for strict equality to avoid type coercion issues.\n';
    }

    if (code.includes('var ')) {
        jsErrors += '💡 Suggestion: Consider using let or const instead of var for better scoping.\n';
    }

    if (code.includes('console.log') && !code.includes('try')) {
        jsErrors += '💡 Tip: Consider wrapping console.log in development checks for production code.\n';
    }

    return jsErrors;
}

function detectPythonErrors(code) {
    let pyErrors = '';

    if (code.includes('print ') && !code.includes('(')) {
        pyErrors += '⚠ Python 2 style print detected. Use print() for Python 3.\n';
    }

    if (code.includes('\t') && code.includes('    ')) {
        pyErrors += '⚠ Mixed tabs and spaces detected. Use consistent indentation.\n';
    }

    return pyErrors;
}

function generateDebuggingSuggestions(code, language) {
    let suggestions = '';

    if (code.includes('if') && !code.includes('else')) {
        suggestions += '- Consider adding else clauses for complete conditional coverage.\n';
    }

    if (code.includes('for') || code.includes('while')) {
        suggestions += '- Add console.log/print statements inside loops to track iteration progress.\n';
    }

    if (code.includes('function') || code.includes('def ')) {
        suggestions += '- Test functions with different input values to ensure they work correctly.\n';
    }

    if (code.includes('array') || code.includes('list') || code.includes('[')) {
        suggestions += '- Check array/list bounds to avoid index out of range errors.\n';
    }

    if (language === 'JavaScript' && (code.includes('async') || code.includes('promise'))) {
        suggestions += '- Use try-catch blocks around asynchronous operations.\n';
    }

    return suggestions || null;
}

function estimateComplexity(code) {
    let complexity = 1;
    if (code.includes('if')) complexity += 1;
    if (code.includes('for') || code.includes('while')) complexity += 2;
    if (code.includes('function') || code.includes('def ')) complexity += 1;
    if (code.length > 500) complexity += 1;
    if (complexity <= 2) return 'Low';
    if (complexity <= 4) return 'Medium';
    return 'High';
}

function detectLanguage(code) {
    if (code.includes('function') || code.includes('console.log') || code.includes('let ') || code.includes('const ')) {
        return 'JavaScript';
    }
    if (code.includes('def ') || code.includes('print(') || code.includes('import ')) {
        return 'Python';
    }
    if (code.includes('public class') || code.includes('System.out.println')) {
        return 'Java';
    }
    return 'Unknown';
}

function generateExercise(difficulty) {
    const exercises = {
        beginner: [
            {
                description: 'Write a function that takes two numbers and returns their sum.',
                validation: (code) => code.includes('function') && code.includes('return') && (code.includes('+') || code.includes('add'))
            },
            {
                description: 'Create a variable and assign it a string value, then print it.',
                validation: (code) => (code.includes('let') || code.includes('const') || code.includes('var')) && (code.includes('console.log') || code.includes('print'))
            },
            {
                description: 'Write an if statement that checks if a number is positive.',
                validation: (code) => code.includes('if') && (code.includes('>') || code.includes('>='))
            }
        ],
        intermediate: [
            {
                description: 'Write a function that reverses a string without using built-in methods.',
                validation: (code) => code.includes('function') && code.includes('for') && code.includes('length')
            },
            {
                description: 'Implement a loop that prints numbers from 1 to 10.',
                validation: (code) => (code.includes('for') || code.includes('while')) && (code.includes('console.log') || code.includes('print'))
            },
            {
                description: 'Create an array and write a function to find the maximum value.',
                validation: (code) => code.includes('function') && code.includes('[') && code.includes('return')
            }
        ],
        advanced: [
            {
                description: 'Implement a binary search algorithm.',
                validation: (code) => code.includes('function') && code.includes('while') && (code.includes('mid') || code.includes('middle'))
            },
            {
                description: 'Write a recursive function to calculate factorial.',
                validation: (code) => code.includes('function') && code.includes('return') && code.includes('') && code.match(/\w+\s\(\s*\w+\s*-\s*1\s*\)/)
            },
            {
                description: 'Create a class with methods and instantiate it.',
                validation: (code) => code.includes('class') && code.includes('constructor') && code.includes('new')
            }
        ]
    };

    const selected = exercises[difficulty][Math.floor(Math.random() * exercises[difficulty].length)];
    return AI Generated Exercise (${difficulty}):\n${selected.description}\n\nTry to implement this and then analyze your code!;
}

function validateExerciseSolution(exerciseText, userCode) {
    // Extract the exercise description from the text
    const descriptionMatch = exerciseText.match(/:\n(.+)\n\n/);
    if (!descriptionMatch) return null;

    const description = descriptionMatch[1];

    // Find the corresponding validation function
    const exercises = {
        beginner: [
            { desc: 'Write a function that takes two numbers and returns their sum.', validation: (code) => code.includes('function') && code.includes('return') && (code.includes('+') || code.includes('add')) },
            { desc: 'Create a variable and assign it a string value, then print it.', validation: (code) => (code.includes('let') || code.includes('const') || code.includes('var')) && (code.includes('console.log') || code.includes('print')) },
            { desc: 'Write an if statement that checks if a number is positive.', validation: (code) => code.includes('if') && (code.includes('>') || code.includes('>=') || code.includes('positive')) }
        ],
        intermediate: [
            { desc: 'Write a function that reverses a string without using built-in methods.', validation: (code) => code.includes('function') && code.includes('for') && code.includes('length') },
            { desc: 'Implement a loop that prints numbers from 1 to 10.', validation: (code) => (code.includes('for') || code.includes('while')) && (code.includes('console.log') || code.includes('print')) },
            { desc: 'Create an array and write a function to find the maximum value.', validation: (code) => code.includes('function') && code.includes('[') && code.includes('return') }
        ],
        advanced: [
            { desc: 'Implement a binary search algorithm.', validation: (code) => code.includes('function') && code.includes('while') && (code.includes('mid') || code.includes('middle')) },
            { desc: 'Write a recursive function to calculate factorial.', validation: (code) => code.includes('function') && code.includes('return') && code.includes('') && code.match(/\w+\s\(\s*\w+\s*-\s*1\s*\)/) },
            { desc: 'Create a class with methods and instantiate it.', validation: (code) => code.includes('class') && code.includes('constructor') && code.includes('new') }
        ]
    };

    for (const level in exercises) {
        const exercise = exercises[level].find(ex => description.includes(ex.desc.substring(0, 20)));
        if (exercise) {
            const isValid = exercise.validation(userCode);
            return {
                valid: isValid,
                feedback: isValid ?
                    '✓ Great! Your solution meets the exercise requirements.' :
                    '⚠ Your solution may not fully meet the exercise requirements. Try again or check the exercise description.'
            };
        }
    }

    return null;
}

// Enhanced code analysis functions

function parseCodeStructure(code, language) {
    const ast = {
        functions: [],
        variables: [],
        loops: [],
        conditionals: [],
        classes: []
    };

    const lines = code.split('\n');

    lines.forEach(line => {
        const trimmed = line.trim();

        // Function detection
        if (language === 'JavaScript') {
            const funcMatch = trimmed.match(/function\s+(\w+)/) || trimmed.match(/const\s+(\w+)\s*=\s*\(/) || trimmed.match(/let\s+(\w+)\s*=\s*\(/);
            if (funcMatch) ast.functions.push(funcMatch[1]);
        } else if (language === 'Python') {
            const funcMatch = trimmed.match(/def\s+(\w+)/);
            if (funcMatch) ast.functions.push(funcMatch[1]);
        }

        // Variable detection
        if (language === 'JavaScript') {
            const varMatch = trimmed.match(/(?:let|const|var)\s+(\w+)/);
            if (varMatch) ast.variables.push(varMatch[1]);
        } else if (language === 'Python') {
            const varMatch = trimmed.match(/^(\w+)\s*=/);
            if (varMatch && !ast.functions.includes(varMatch[1])) ast.variables.push(varMatch[1]);
        }

        // Loop detection
        if (trimmed.includes('for') || trimmed.includes('while')) {
            ast.loops.push(trimmed.substring(0, 20) + '...');
        }

        // Conditional detection
        if (trimmed.includes('if') || trimmed.includes('else if') || trimmed.includes('switch')) {
            ast.conditionals.push(trimmed.substring(0, 20) + '...');
        }

        // Class detection
        if (language === 'JavaScript' && trimmed.includes('class ')) {
            const classMatch = trimmed.match(/class\s+(\w+)/);
            if (classMatch) ast.classes.push(classMatch[1]);
        } else if (language === 'Python' && trimmed.includes('class ')) {
            const classMatch = trimmed.match(/class\s+(\w+)/);
            if (classMatch) ast.classes.push(classMatch[1]);
        }
    });

    return ast;
}

function calculateQualityScore(code) {
    let score = 5; // Base score

    // Length considerations
    if (code.length < 50) score -= 1; // Too short
    else if (code.length > 2000) score -= 1; // Too long

    // Readability
    const lines = code.split('\n');
    const avgLineLength = code.length / lines.length;
    if (avgLineLength > 100) score -= 1; // Lines too long
    if (lines.some(line => line.length > 120)) score -= 1; // Very long lines

    // Best practices
    if (code.includes('var ')) score -= 1; // Using var instead of let/const
    if (code.includes('console.log')) score += 0.5; // Good for debugging
    if (code.includes('//') || code.includes('#')) score += 0.5; // Has comments

    // Structure
    if (code.includes('function') || code.includes('def ')) score += 1; // Has functions
    if (code.includes('if ') || code.includes('for ') || code.includes('while ')) score += 0.5; // Has control structures

    return Math.max(1, Math.min(10, Math.round(score)));
}

function detectCodePatterns(code, language) {
    const patterns = [];

    if (code.includes('for') && code.includes('if')) {
        patterns.push('Loop with condition');
    }

    if (code.includes('function') && code.includes('return')) {
        patterns.push('Function with return');
    }

    if (code.includes('try') && code.includes('catch')) {
        patterns.push('Error handling');
    }

    if (code.includes('array') || code.includes('[') && code.includes(']')) {
        patterns.push('Array usage');
    }

    if (code.includes('class') || code.includes('object')) {
        patterns.push('OOP concepts');
    }

    if (code.includes('async') || code.includes('await')) {
        patterns.push('Asynchronous programming');
    }

    return patterns;
}
