import requests
import json

repoSearch=input('Enter the repository name:\n')
url="https://api.github.com/search/repositories?q=%s&page=1&per_page=10"%repoSearch
response=requests.get(url)
data=response.json()
for item in data['items']:

	UserProfile=item['owner']['url']
	ProjectName=item['full_name'];
	RepoLink = item['html_url'];
	Description = item['description'];
	mainOutput= "\n UserProfile link is: %s, and project name is: %s, and RepoLink is: %s, \nand its about: %s\n\n" % (UserProfile,ProjectName,RepoLink,Description)
	print(mainOutput)

