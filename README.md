# Geeks Club Website
MoCoGeeks Website Landing Page
This is the website of MoCoGeeks created by [Mingjie](https://www.mingjie.info).

## Changing Meeting Time
Leaders, officers... If you are given access to this repository, you should help updating the meeting time information on our website. However, it is very important that you edit the information **very carefully** - they are pushed directly to our website!

### Step 1: Start editing the code
Go to [index.html](https://github.com/mocogeeks/mocogeeks.com/blob/master/index.html), click the "edit" button on the top right of the code. You should now see an online editor.

### Step 2: Find the information, edit
Press Ctrl+F/Command(⌘)+F, you should see a search bar. Find the following piece of comment indicating the start of the notice element by entering `<!-- Notice -->`. You should see something that looks like this:
```
...
<!-- Starts Content -->
        <div class="page-content">
            <!-- Notice -->
            <div class="row">
                <div class="col s12 m12">
                    <div class="card notice">
                        <div class="card-content">
                            <span class="card-title"><i class="fa fa-bell" aria-hidden="true"></i>&nbsp;Notice</span>
                            <p>Next pre-official membership meeting time <b>TBD</b> at <b>TBD</b></p>
                            <p>Next officer meeting time <b>TBD</b> at <b>TBD</b></p>
                        </div>
                    </div>
                </div>
            </div>
...
```
The text shown as **TBD** here is the information that you should be changing. After editing your section should look something like this:
```
...
<!-- Starts Content -->
        <div class="page-content">
            <!-- Notice -->
            <div class="row">
                <div class="col s12 m12">
                    <div class="card notice">
                        <div class="card-content">
                            <span class="card-title"><i class="fa fa-bell" aria-hidden="true"></i>&nbsp;Notice</span>
                            <p>Next pre-official membership meeting time <b>Feb. 29, 2016 2:45 PM</b> at <b>Ms. Silcox's Room 262</b></p>
                            <p>Next officer meeting time <b>Feb. 29, 2016 6:30 PM</b> at <b>Skype</b></p>
                        </div>
                    </div>
                </div>
            </div>
...
```
Notice that information sections might get changed in future website development but the general framework should still look the same otherwise this wiki will be rewritten. Just change the information that you are supposed to change and **leave everything else alone**!
**Do not touch that code if you don't know what it does! It might look like a typo but in most cases it is not!**

### Step 3: Preview
Click the **Preview** tab on the top to see information about what you have changed. Again, **make sure you didn't change anything else** because if you did, Mingjie will get extremely upset and triggered and will possibly smack your face.

### Step 4: Add a message, Fire!
On the bottom you should see a **Commit Changes** section. There, you **have to** fill the information in the following format:
Message: `Changed meeting time at Feb. 16, 2017` (It should be the date that you edited the file, "today")
Extended Description: `Membership meeting changed to Feb. 29, 2016 2:45 PM at Ms. Silcox's Room 262, officer meeting changed to Feb 29, 2016 6:30 PM at Skype.`

Ok, hope you are done. Time to fire! **Check everything one last time before launching.** When you are ready, click the big green button on the bottom that says: **Commit Changes**.

Wait till GitHub finishes processing the changes.

### Step 5: Check back later.
In some cases cache causes the website not to be immediately updated. But it should be updated within the next hour or so. So check back at https://mocogeeks.com and see if anything looks wrong!

Hope you didn't see anything wrong.

If you did, you messed up. Contact Mingjie the master via email [jiang@mingjie.info](mailto:jiang@mingjie.info) to get punished and fixed!

## License
```
MIT License

Copyright (c) 2017 MoCo Geeks Club

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
