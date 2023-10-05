import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-89859c14.js";const p={},t=e(`<h1 id="_15-生成器与迭代器" tabindex="-1"><a class="header-anchor" href="#_15-生成器与迭代器" aria-hidden="true">#</a> 15. 生成器与迭代器</h1><p>今天我们要聊聊一个有趣的话题：<strong>生成器</strong>和 <strong>迭代器</strong> 。</p><p>在我们开始之前，先放轻松，这个话题其实挺有意思的，我会用最简单的方式向你解释。</p><h2 id="什么是迭代器" tabindex="-1"><a class="header-anchor" href="#什么是迭代器" aria-hidden="true">#</a> 什么是迭代器？</h2><p>首先，让我们来解释一下什么是迭代器。在 Python 中，迭代器是一种特殊的对象，它允许你逐个访问一个可迭代对象中的元素，而不需要提前把所有元素都生成出来。</p><p>来看一个简单的例子：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Charlie&#39;</span><span class="token punctuation">]</span>
iterator <span class="token operator">=</span> <span class="token builtin">iter</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>iterator<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出 &#39;Alice&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>iterator<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出 &#39;Bob&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>iterator<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出 &#39;Charlie&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们先创建了一个列表 <code>names</code>，然后用 <code>iter()</code> 函数把它转换成了一个迭代器 <code>iterator</code>。接着，我们用 <code>next()</code> 函数逐个访问了列表中的元素。</p><h2 id="生成器是什么" tabindex="-1"><a class="header-anchor" href="#生成器是什么" aria-hidden="true">#</a> 生成器是什么？</h2><p>生成器是一种特殊的函数，它使用了 <code>yield</code> 关键字来返回值，而不是使用 <code>return</code>。这使得生成器能够在每次调用时生成一个值，而不需要一次性生成所有值，从而节省了内存空间。</p><p>让我们来看一个生成器的例子：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">countdown</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">yield</span> n
        n <span class="token operator">-=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们定义了一个生成器函数 <code>countdown</code>，它使用了 <code>yield</code> 关键字来返回值。每次调用 <code>next()</code> 函数时，生成器会生成一个新的值。</p><h2 id="实战例子-生成斐波那契数列" tabindex="-1"><a class="header-anchor" href="#实战例子-生成斐波那契数列" aria-hidden="true">#</a> 实战例子：生成斐波那契数列</h2><p>让我们通过一个例子来加深理解。</p><p>假设你想生成一个斐波那契数列，这是一种数学上非常有意思的数列，后一个数字是前两个数字之和。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
    count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> count <span class="token operator">&lt;</span> n<span class="token punctuation">:</span>
        <span class="token keyword">yield</span> a
        a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b
        count <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们定义了一个生成器函数 <code>fibonacci</code>，它接收一个参数 <code>n</code>，表示你想要生成几个斐波那契数。</p><p>然后，我们用一个 <code>for</code> 循环来生成数列，而不是一次性把所有数字都生成出来。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fib <span class="token operator">=</span> fibonacci<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> num <span class="token keyword">in</span> fib<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更多实例" tabindex="-1"><a class="header-anchor" href="#更多实例" aria-hidden="true">#</a> 更多实例</h2><p>让我们再看一个例子，假设你想生成一个从 1 到 100 的所有偶数：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">even_numbers</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">yield</span> i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样地，这个生成器函数 <code>even_numbers</code> 允许你在需要的时候生成偶数，而不是一次性生成所有的偶数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>evens <span class="token operator">=</span> even_numbers<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> even <span class="token keyword">in</span> evens<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>even<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成器与不同数据类型" tabindex="-1"><a class="header-anchor" href="#生成器与不同数据类型" aria-hidden="true">#</a> 生成器与不同数据类型</h2><p>生成器不仅仅可以用于列表，还可以用于其他数据类型。比如，你可以通过生成器逐个生成字典中的键值对：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">dictionary_items</span><span class="token punctuation">(</span>dictionary<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> key <span class="token keyword">in</span> dictionary<span class="token punctuation">:</span>
        <span class="token keyword">yield</span> key<span class="token punctuation">,</span> dictionary<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，你可以使用这个生成器来获取字典中的键值对：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>my_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
items <span class="token operator">=</span> dictionary_items<span class="token punctuation">(</span>my_dict<span class="token punctuation">)</span>
<span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> items<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Key: </span><span class="token interpolation"><span class="token punctuation">{</span>key<span class="token punctuation">}</span></span><span class="token string">, Value: </span><span class="token interpolation"><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样地，你可以尝试使用生成器来生成集合中的元素。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>通过这篇文章，我们学习了生成器和迭代器的基本概念。迭代器是一种特殊的对象，允许你逐个访问一个可迭代对象中的元素。生成器是一种特殊的函数，它使用了 <code>yield</code> 关键字来返回值，能够节省内存空间。</p><p>希望你现在对生成器和迭代器有了更清晰的理解。继续加油，你已经迈出了成为 Python 大师的一大步！</p><p>学到了什么：</p><ul><li>了解了什么是迭代器和生成器</li><li>学会了如何使用生成器生成斐波那契数列以及其他实例</li><li>理解了生成器的优点，可以节省内存</li><li>掌握了生成器在不同数据类型中的应用</li></ul>`,36),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","15. 生成器与迭代器.html.vue"]]);export{r as default};
