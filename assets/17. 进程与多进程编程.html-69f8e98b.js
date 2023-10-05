import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-89859c14.js";const t={},e=p(`<h1 id="_17-进程与多进程编程" tabindex="-1"><a class="header-anchor" href="#_17-进程与多进程编程" aria-hidden="true">#</a> 17. 进程与多进程编程</h1><p>今天我们要一起来探讨一个非常有趣的话题： <strong>进程与多进程编程</strong> 。</p><p>在我们开始之前，让我们放轻松，别担心，这个话题并不复杂，但它可以让你的程序变得更加强大！</p><h2 id="什么是进程" tabindex="-1"><a class="header-anchor" href="#什么是进程" aria-hidden="true">#</a> 什么是进程？</h2><p>首先，让我们来了解一下什么是进程。在计算机中，一个进程可以看作是一个程序的执行实例。一个程序可以同时运行多个进程，每个进程拥有独立的内存空间和系统资源。</p><p>比如，你可以同时打开一个浏览器、一个文档编辑器，这些都是不同的进程。</p><h2 id="为什么需要多进程" tabindex="-1"><a class="header-anchor" href="#为什么需要多进程" aria-hidden="true">#</a> 为什么需要多进程？</h2><p>有了多进程，我们可以同时执行多个任务，这样可以提高程序的效率和利用多核处理器的能力。</p><p>举个例子，假如你需要处理大量的数据，如果只有一个进程在工作，可能会非常慢。但如果你使用多个进程，可以同时处理多份数据，大大加快处理速度。</p><h2 id="为什么有了多线程还要有多进程" tabindex="-1"><a class="header-anchor" href="#为什么有了多线程还要有多进程" aria-hidden="true">#</a> 为什么有了多线程还要有多进程？</h2><p>这是一个很好的问题！虽然多线程和多进程都可以实现并发执行，但它们解决的问题场景有所不同。</p><p>多线程适合处理 I/O 密集型任务，比如网络请求、文件读写等，因为在这些操作中，大部分时间都在等待 I/O 操作完成，线程可以在这个等待的过程中去做其他事情，从而提高了程序的效率。</p><p>然而，对于 CPU 密集型任务，比如复杂的数学计算，多线程并不能提升效率，因为在 Python 中，由于全局解释器锁 (GIL) 的存在，同一时刻只能有一个线程在执行 Python 字节码。</p><p>因此，为了充分利用多核处理器，我们需要使用多进程来同时执行多个 CPU 密集型任务。</p><h2 id="使用进程" tabindex="-1"><a class="header-anchor" href="#使用进程" aria-hidden="true">#</a> 使用进程</h2><p>Python 提供了 <code>multiprocessing</code> 模块来支持多进程编程。下面让我们通过一个例子来学习如何使用多进程：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> multiprocessing

<span class="token keyword">def</span> <span class="token function">print_numbers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

<span class="token comment"># 创建一个进程</span>
process <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>print_numbers<span class="token punctuation">)</span>

<span class="token comment"># 启动进程</span>
process<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 等待进程结束</span>
process<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;进程执行完毕&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们首先导入了 <code>multiprocessing</code> 模块，然后定义了一个打印数字的函数 <code>print_numbers</code>。接着，我们创建了一个进程，将 <code>print_numbers</code> 函数作为目标，并启动了这个进程。最后，等待进程执行完毕并打印出结束信息。</p><h2 id="为什么要有进程同步" tabindex="-1"><a class="header-anchor" href="#为什么要有进程同步" aria-hidden="true">#</a> 为什么要有进程同步？</h2><p>在多进程编程中，有时候会出现多个进程同时访问共享资源的情况，这时候就可能会导致数据错乱。</p><p>举个例子，假如你有一个共享的计数变量，同时有两个进程在进行操作，一个在增加计数，一个在减少计数。如果没有进程同步，就有可能出现错误的结果。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 错误示例</span>
<span class="token keyword">def</span> <span class="token function">increase_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> count
    count <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token keyword">def</span> <span class="token function">decrease_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> count
    count <span class="token operator">-=</span> <span class="token number">1</span>

count <span class="token operator">=</span> <span class="token number">0</span>

process1 <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>increase_count<span class="token punctuation">)</span>
process2 <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>decrease_count<span class="token punctuation">)</span>

process1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
process2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

process1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
process2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>  <span class="token comment"># 可能得到的结果并不是 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用锁以保证进程安全" tabindex="-1"><a class="header-anchor" href="#使用锁以保证进程安全" aria-hidden="true">#</a> 使用锁以保证进程安全</h2><p>为了解决上面的问题，我们可以使用进程同步的技术，Python 提供了 <code>multiprocessing.Lock</code> 来帮助我们实现进程同步。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>lock <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">increase_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> count
    lock<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 获取锁</span>
    count <span class="token operator">+=</span> <span class="token number">1</span>
    lock<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 释放锁</span>

<span class="token keyword">def</span> <span class="token function">decrease_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> count
    lock<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 获取锁</span>
    count <span class="token operator">-=</span> <span class="token number">1</span>
    lock<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 释放锁</span>

count <span class="token operator">=</span> <span class="token number">0</span>

process1 <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>increase_count<span class="token punctuation">)</span>
process2 <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>decrease_count<span class="token punctuation">)</span>

process1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
process2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

process1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
process2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>  <span class="token comment"># 现在得到的结果是 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-event-实现进程同步" tabindex="-1"><a class="header-anchor" href="#使用-event-实现进程同步" aria-hidden="true">#</a> 使用 Event 实现进程同步</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> multiprocessing
<span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">wait_for_event</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;等待事件&#39;</span><span class="token punctuation">)</span>
    event<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;事件发生了&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">set_event</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 假设在这之前做了一些操作</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;事件设置&#39;</span><span class="token punctuation">)</span>
    event<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    event <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Event<span class="token punctuation">(</span><span class="token punctuation">)</span>

    process1 <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>wait_for_event<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    process2 <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>set_event<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    process1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    process2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    process1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    process2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-queue-实现进程通信" tabindex="-1"><a class="header-anchor" href="#使用-queue-实现进程通信" aria-hidden="true">#</a> 使用 Queue 实现进程通信</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> multiprocessing

<span class="token keyword">def</span> <span class="token function">producer</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;生产者生产了产品</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
        queue<span class="token punctuation">.</span>put<span class="token punctuation">(</span>i<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">consumer</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        item <span class="token operator">=</span> queue<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> item <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">break</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;消费者消费了产品</span><span class="token interpolation"><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    queue <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Queue<span class="token punctuation">(</span><span class="token punctuation">)</span>

    producer_process <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>producer<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    consumer_process <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>consumer<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    producer_process<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    consumer_process<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    producer_process<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span>put<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span>  <span class="token comment"># 发送结束信号</span>
    consumer_process<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实战例子-多进程下载图片" tabindex="-1"><a class="header-anchor" href="#实战例子-多进程下载图片" aria-hidden="true">#</a> 实战例子：多进程下载图片</h2><p>让我们通过一个实际的例子来巩固所学吧！假设我们需要从网上下载一批图片，我们可以使用多进程来同时下载，以节省时间。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> multiprocessing
<span class="token keyword">import</span> requests

<span class="token keyword">def</span> <span class="token function">download_image</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
    response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
        <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>response<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string"> 下载完成&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 图片链接列表</span>
image_urls <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;https://example.com/image1.jpg&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;https://example.com/image2.jpg&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;https://example.com/image3.jpg&#39;</span>
<span class="token punctuation">]</span>

<span class="token comment"># 启动多个进程下载图片</span>
processes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span> url <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>image_urls<span class="token punctuation">)</span><span class="token punctuation">:</span>
    process <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>download_image<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token string-interpolation"><span class="token string">f&#39;image_</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">.jpg&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    processes<span class="token punctuation">.</span>append<span class="token punctuation">(</span>process<span class="token punctuation">)</span>
    process<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 等待所有进程完成</span>
<span class="token keyword">for</span> process <span class="token keyword">in</span> processes<span class="token punctuation">:</span>
    process<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;所有图片下载完成！&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过本文，我们学习了如何使用多进程来实现多任务并发执行，以及如何保证进程安全。进程同步是多进程编程中一个非常重要的概念，它可以保证共享资源的正确访问，避免数据错乱。</p><p>同时，我们还介绍了如何使用 <code>multiprocessing.Lock</code> 来实现进程同步，以及实际应用中的例子。</p><p>希望你现在对进程与多进程编程有了更清晰的理解。继续加油，你已经掌握了一个非常有用的 Python 编程技能！</p>`,35),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","17. 进程与多进程编程.html.vue"]]);export{d as default};
